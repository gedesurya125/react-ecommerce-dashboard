import {
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const ReviewList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="customer_id" reference="customers" />
      {/* <TextField source="id" /> */}
      <DateField source="date" />
      <TextField source="status" />
      <ReferenceField source="command_id" reference="commands" />
      <ReferenceField source="product_id" reference="products" />
      <NumberField source="rating" />
      {/* <TextField source="comment" /> */}
    </Datagrid>
  </List>
);
