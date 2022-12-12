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
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { HmProtestAccountList } from "./hmProtestAccount/HmProtestAccountList";
import { HmProtestAccountCreate } from "./hmProtestAccount/HmProtestAccountCreate";
import { HmProtestAccountEdit } from "./hmProtestAccount/HmProtestAccountEdit";
import { HmProtestAccountShow } from "./hmProtestAccount/HmProtestAccountShow";
import { HmProtestProjectList } from "./hmProtestProject/HmProtestProjectList";
import { HmProtestProjectCreate } from "./hmProtestProject/HmProtestProjectCreate";
import { HmProtestProjectEdit } from "./hmProtestProject/HmProtestProjectEdit";
import { HmProtestProjectShow } from "./hmProtestProject/HmProtestProjectShow";
import { HmProtestFeatureList } from "./hmProtestFeature/HmProtestFeatureList";
import { HmProtestFeatureCreate } from "./hmProtestFeature/HmProtestFeatureCreate";
import { HmProtestFeatureEdit } from "./hmProtestFeature/HmProtestFeatureEdit";
import { HmProtestFeatureShow } from "./hmProtestFeature/HmProtestFeatureShow";
import { HmProtestRequirementList } from "./hmProtestRequirement/HmProtestRequirementList";
import { HmProtestRequirementCreate } from "./hmProtestRequirement/HmProtestRequirementCreate";
import { HmProtestRequirementEdit } from "./hmProtestRequirement/HmProtestRequirementEdit";
import { HmProtestRequirementShow } from "./hmProtestRequirement/HmProtestRequirementShow";
import { HmProtestAccountUserList } from "./hmProtestAccountUser/HmProtestAccountUserList";
import { HmProtestAccountUserCreate } from "./hmProtestAccountUser/HmProtestAccountUserCreate";
import { HmProtestAccountUserEdit } from "./hmProtestAccountUser/HmProtestAccountUserEdit";
import { HmProtestAccountUserShow } from "./hmProtestAccountUser/HmProtestAccountUserShow";
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
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="HmProtestAccount"
          list={HmProtestAccountList}
          edit={HmProtestAccountEdit}
          create={HmProtestAccountCreate}
          show={HmProtestAccountShow}
        />
        <Resource
          name="HmProtestProject"
          list={HmProtestProjectList}
          edit={HmProtestProjectEdit}
          create={HmProtestProjectCreate}
          show={HmProtestProjectShow}
        />
        <Resource
          name="HmProtestFeature"
          list={HmProtestFeatureList}
          edit={HmProtestFeatureEdit}
          create={HmProtestFeatureCreate}
          show={HmProtestFeatureShow}
        />
        <Resource
          name="HmProtestRequirement"
          list={HmProtestRequirementList}
          edit={HmProtestRequirementEdit}
          create={HmProtestRequirementCreate}
          show={HmProtestRequirementShow}
        />
        <Resource
          name="HmProtestAccountUser"
          list={HmProtestAccountUserList}
          edit={HmProtestAccountUserEdit}
          create={HmProtestAccountUserCreate}
          show={HmProtestAccountUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
