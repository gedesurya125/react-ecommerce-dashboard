import { useDataProvider } from "ra-core";

export const LogData = () => {
  const dataProvider = useDataProvider();

  console.log("this is the data", dataProvider.getList);

  return null;
};
