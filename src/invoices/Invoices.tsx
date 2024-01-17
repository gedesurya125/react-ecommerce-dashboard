import {
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const InvoiceList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="date" />
      <ReferenceField source="command_id" reference="commands" />
      <ReferenceField source="customer_id" reference="customers" />
      <NumberField source="total_ex_taxes" />
      <NumberField source="delivery_fees" />
      <NumberField source="tax_rate" />
      <NumberField source="taxes" />
      <NumberField source="total" />
    </Datagrid>
  </List>
);
