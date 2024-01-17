import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  ImageField,
} from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="reference" />
      <NumberField source="price" />
      <ImageField source="thumbnail" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" />
    </Datagrid>
  </List>
);
