import {
  Admin,
  ListGuesser,
  Resource,
  // ListGuesser, //? used to generate List Component
  // EditGuesser, //? used to generate Edit Form Component
  // ShowGuesser, //? used to generated Show Detail Component
} from "react-admin";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";
import dataProviderFactory from "./dataProvider";
import { LogData } from "./components/LogData";

export const App = () => {
  return (
    <Admin
      title="E-COMMERCE"
      dataProvider={dataProviderFactory("")}
      dashboard={Dashboard}
      authProvider={authProvider}
    >
      <LogData />
      <Resource name="categories" list={ListGuesser} />
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
