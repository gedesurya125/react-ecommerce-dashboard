import { Card, CardHeader, CardContent } from "@mui/material";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { format, subDays, addDays } from "date-fns";

import { Order } from "../types";

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const dateFormatter = (date: number): string =>
  new Date(date).toLocaleDateString();

const aggregateOrdersByDay = (orders: Order[]): { [key: string]: number } =>
  orders
    .filter((order: Order) => order.status !== "cancelled")
    .reduce((acc, curr) => {
      const day = format(new Date(curr.date), "yyyy-MM-dd");
      if (!acc[day]) {
        acc[day] = 0;
      }
      acc[day] += curr.total;
      return acc;
    }, {} as { [key: string]: number });

const getRevenuePerDay = (orders: Order[]): TotalByDay[] => {
  const daysWithRevenue = aggregateOrdersByDay(orders);
  return lastMonthDays.map((date, index) => ({
    date: date.getTime(),
    total: daysWithRevenue[format(new Date(date), "yyyy-MM-dd")] || 0,
    fake:
      (daysWithRevenue[format(new Date(date), "yyyy-MM-dd")] || 0) * 1.3 +
      20 * index,
  }));
};

const OrderChart = (props: { orders?: Order[] }) => {
  const { orders } = props;
  if (!orders) return null;

  return (
    <Card>
      <CardHeader title={"Monthly Orders history"} />
      <CardContent>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <LineChart
              data={getRevenuePerDay(orders)}
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="date"
                name="Date"
                type="number"
                scale="time"
                domain={[addDays(aMonthAgo, 1).getTime(), new Date().getTime()]}
                tickFormatter={dateFormatter}
              />
              <YAxis name="Revenue" unit="€" />
              <CartesianGrid strokeDasharray="3 3" />
              <Legend />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                formatter={(value: any) =>
                  new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "USD",
                  }).format(value)
                }
                labelFormatter={(label: any) => dateFormatter(label)}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#8884d8"
                strokeWidth={2}
                // fill="url(#colorUv)"
              />
              <Line
                type="monotone"
                dataKey="fake"
                stroke="#456328"
                strokeWidth={2}
                // fill="#946738"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

interface TotalByDay {
  date: number;
  total: number;
}

export default OrderChart;
