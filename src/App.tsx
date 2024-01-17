import {
  Admin,
  ListGuesser,
  Resource,
  // ListGuesser, //? used to generate List Component
  // EditGuesser, //? used to generate Edit Form Component
  // ShowGuesser, //? used to generated Show Detail Component
} from "react-admin";
import { Dashboard } from "./dashboard/Dashboard";
import { authProvider } from "./authProvider";
import dataProviderFactory from "./dataProvider";
import { LogData } from "./components/LogData";
import { CommandList } from "./commands/Commands";
import { ProductList } from "./products/Products";
import { CategoryList } from "./categories/Categories";
import { CustomerList } from "./customers/Customers";
import { InvoiceList } from "./invoices/Invoices";
import { ReviewList } from "./reviews/Reviews";

// Icons

import People from "@mui/icons-material/People";
import ProductIcon from "@mui/icons-material/BurstMode";
import Categories from "@mui/icons-material/Category";
import Cart from "@mui/icons-material/ShoppingCart";
import Paper from "@mui/icons-material/DocumentScannerOutlined";
import Review from "@mui/icons-material/Chat";

export const App = () => {
  return (
    <Admin
      title="E-COMMERCE"
      dataProvider={dataProviderFactory("")} //? use REST API
      dashboard={Dashboard}
      authProvider={authProvider}
    >
      <LogData />
      <Resource
        name="commands"
        list={CommandList}
        options={{
          label: "Orders",
        }}
        icon={Cart}
      />
      <Resource
        name="products"
        list={ProductList}
        recordRepresentation="reference"
        icon={ProductIcon}
      />
      <Resource name="categories" list={CategoryList} icon={Categories} />
      <Resource
        name="customers"
        list={CustomerList}
        icon={People}
        recordRepresentation="first_name"
      />
      <Resource name="invoices" list={InvoiceList} icon={Paper} />
      <Resource name="reviews" list={ReviewList} icon={Review} />

      {/* <Resource
              name="posts"
              list={PostList}
              edit={PostEdit}
              create={PostCreate}
              icon={PostIcon}
            />
            <Resource
              name="users"
              list={UserList}
              recordRepresentation="name"
              show={UserShow}
              icon={UserIcon}
            /> */}
    </Admin>
  );
};
