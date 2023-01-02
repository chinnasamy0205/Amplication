import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { FeatureList } from "./feature/FeatureList";
import { FeatureCreate } from "./feature/FeatureCreate";
import { FeatureEdit } from "./feature/FeatureEdit";
import { FeatureShow } from "./feature/FeatureShow";
import { RequirementList } from "./requirement/RequirementList";
import { RequirementCreate } from "./requirement/RequirementCreate";
import { RequirementEdit } from "./requirement/RequirementEdit";
import { RequirementShow } from "./requirement/RequirementShow";
import { AccountUserList } from "./accountUser/AccountUserList";
import { AccountUserCreate } from "./accountUser/AccountUserCreate";
import { AccountUserEdit } from "./accountUser/AccountUserEdit";
import { AccountUserShow } from "./accountUser/AccountUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProTest"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Feature"
          list={FeatureList}
          edit={FeatureEdit}
          create={FeatureCreate}
          show={FeatureShow}
        />
        <Resource
          name="Requirement"
          list={RequirementList}
          edit={RequirementEdit}
          create={RequirementCreate}
          show={RequirementShow}
        />
        <Resource
          name="AccountUser"
          list={AccountUserList}
          edit={AccountUserEdit}
          create={AccountUserCreate}
          show={AccountUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
