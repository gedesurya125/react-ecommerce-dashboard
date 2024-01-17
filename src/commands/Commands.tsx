import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const CommandList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="reference" />
      <ReferenceField source="customer_id" reference="customers" />
      <DateField source="date" />
      <ArrayField source="basket">
        <SingleFieldList>
          <ReferenceField source="product_id" reference="products" />
        </SingleFieldList>
      </ArrayField>
      <NumberField source="total_ex_taxes" />
      <NumberField source="delivery_fees" />
      <NumberField source="tax_rate" />
      <NumberField source="taxes" />
      <NumberField source="total" />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
