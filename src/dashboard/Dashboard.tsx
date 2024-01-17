// in src/Dashboard.tsx
import { Card, CardContent, CardHeader } from "@mui/material";
import { startOfDay, subDays } from "date-fns";
import { useMemo } from "react";
import { useGetList } from "react-admin";
import { Order } from "../types";
import OrderChart from "./OrderChart";
import { ProductStockChart } from "./ProductStockChart";

interface OrderStats {
  revenue: number;
  nbNewOrders: number;
  pendingOrders: Order[];
}

interface State {
  nbNewOrders?: number;
  pendingOrders?: Order[];
  recentOrders?: Order[];
  revenue?: string;
}

export const Dashboard = () => {
  const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

  const { data: orders } = useGetList<Order>("commands", {
    filter: { date_gte: aMonthAgo.toISOString() },
    sort: { field: "date", order: "DESC" },
    pagination: { page: 1, perPage: 50 },
  });

  const aggregation = useMemo<State>(() => {
    if (!orders) return {};
    const aggregations = orders
      .filter((order) => order.status !== "cancelled")
      .reduce(
        (stats: OrderStats, order) => {
          if (order.status !== "cancelled") {
            stats.revenue += order.total;
            stats.nbNewOrders++;
          }
          if (order.status === "ordered") {
            stats.pendingOrders.push(order);
          }
          return stats;
        },
        {
          revenue: 0,
          nbNewOrders: 0,
          pendingOrders: [],
        }
      );
    return {
      recentOrders: orders,
      revenue: aggregations.revenue.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      nbNewOrders: aggregations.nbNewOrders,
      pendingOrders: aggregations.pendingOrders,
    };
  }, [orders]);

  const {
    // nbNewOrders, pendingOrders, revenue,
    recentOrders,
  } = aggregation;

  return (
    <Card>
      <CardHeader title="Welcome to the Dashboard" />
      <CardContent>Overview</CardContent>

      <OrderChart orders={recentOrders} />

      <ProductStockChart />
    </Card>
  );
};
