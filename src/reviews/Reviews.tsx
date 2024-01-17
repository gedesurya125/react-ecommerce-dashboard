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
      <TextField source="id" />
      <DateField source="date" />
      <TextField source="status" />
      <ReferenceField source="command_id" reference="commands" />
      <ReferenceField source="product_id" reference="products" />
      <ReferenceField source="customer_id" reference="customers" />
      <NumberField source="rating" />
      <TextField source="comment" />
    </Datagrid>
  </List>
);
