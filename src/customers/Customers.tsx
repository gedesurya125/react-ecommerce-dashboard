import {
  // BooleanField,
  Datagrid,
  // DateField,
  EmailField,
  ImageField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const CustomerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ImageField source="avatar" />
      {/* <TextField source="id" /> */}
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="address" />
      {/* <TextField source="zipcode" /> */}
      {/* <TextField source="city" /> */}
      {/* <TextField source="stateAbbr" /> */}
      {/* <DateField source="birthday" /> */}
      {/* <DateField source="first_seen" /> */}
      {/* <DateField source="last_seen" /> */}
      {/* <BooleanField source="has_ordered" /> */}
      {/* <DateField source="latest_purchase" /> */}
      {/* <BooleanField source="has_newsletter" /> */}
      {/* <TextField source="groups" /> */}
      <NumberField source="nb_commands" />
      <NumberField source="total_spent" />
    </Datagrid>
  </List>
);
