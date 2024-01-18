import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  ImageField,
  Show,
  SimpleShowLayout,
  DateField,
  EditButton,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  // useRecordContext,
} from "react-admin";

// import { Box } from "@mui/material";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="show">
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="reference" />
      <NumberField source="price" />
      <ImageField source="thumbnail" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="reference" />
      <NumberField source="width" />
      <NumberField source="height" />
      <NumberField source="price" />
      {/* <ImageField source="thumbnail" /> */}
      <ImageField source="image" />
      <TextField source="description" />
      <DateField source="stock" />
      <NumberField source="sales" />
    </SimpleShowLayout>
  </Show>
);

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="category_id" reference="categories" />
      <TextInput source="reference" />
      <NumberInput source="width" />
      <NumberInput source="height" />
      <NumberInput source="price" />
      <TextInput source="thumbnail" />
      <TextInput source="image" />
      <TextInput source="description" />
      <NumberInput source="stock" />
      <NumberInput source="sales" />
    </SimpleForm>
  </Edit>
);

// const MyImageInput = () => {
//   const thumbnail = "thumbnail";
//   const image = "image";

//   const record = useRecordContext();

//   if (!record) return null;

//   return <Box></Box>;
// };
