import {
  Admin,
  Resource,
  // ListGuesser, //? used to generate List Component
  // EditGuesser, //? used to generate Edit Form Component
  // ShowGuesser, //? used to generated Show Detail Component
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList, UserShow } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource
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
    />
  </Admin>
);
