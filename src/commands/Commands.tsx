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
  Show,
  SimpleShowLayout,
} from "react-admin";

export const CommandList = () => (
  <List>
    <Datagrid rowClick="show">
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

export const CommandShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="reference" />
        <DateField source="date" />
        <ReferenceField source="customer_id" reference="customers" />
        <ArrayField source="basket">
          <Datagrid isRowSelectable={() => false} bulkActionButtons={false}>
            <ReferenceField source="product_id" reference="products" />
            <NumberField source="quantity" />
          </Datagrid>
        </ArrayField>
        <NumberField source="total_ex_taxes" />
        <NumberField source="delivery_fees" />
        <NumberField source="tax_rate" />
        <NumberField source="taxes" />
        <NumberField source="total" />
        <TextField source="status" />
        <BooleanField source="returned" />
      </SimpleShowLayout>
    </Show>
  );
};
