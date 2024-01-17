import { Card, CardHeader, CardContent } from "@mui/material";
import { useGetList } from "react-admin";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ProductStockChart = () => {
  const { data: products } = useGetList("products");
  if (!products || products?.length === 0) return null;

  const dataForChart = products?.map((data) => {
    return {
      label: data.reference,
      stock: data.stock,
    };
  });

  // const getPath = (x: number, y: number, width: number, height: number) => {
  //   return `M${x},${y + height}C${x + width / 3},${y + height} ${
  //     x + width / 2
  //   },${y + height / 3}
  // ${x + width / 2}, ${y}
  // C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
  //     x + width
  //   }, ${y + height}
  // Z`;
  // };

  // const TriangleBar = (props: any) => {
  //   const { fill, x, y, width, height } = props;
  //   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  // };

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <Card>
      <CardHeader title="Product Stock" />
      <CardContent>
        <div style={{ width: "100%", height: "500px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataForChart} width={1000} height={300}>
              <XAxis dataKey="label" name="Label" />
              <YAxis />
              <CartesianGrid strokeDasharray="1 1" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="stock"
                fill={"#8A6642"}
                // activeBar={<Rectangle fill="pink" stroke="blue" />}
                // shape={<TriangleBar />}
                label={{
                  position: "top",
                }}
              />
              {dataForChart.map(({ label }, index) => (
                <Cell key={`cell-${label}`} fill={colors[index % 20]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

// ? chart source:  https://release--63da8268a0da9970db6992aa.chromatic.com/?path=/story/examples-barchart--simple
