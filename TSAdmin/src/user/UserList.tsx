import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HMPROTESTACCOUNTUSER_TITLE_FIELD } from "../hmProtestAccountUser/HmProtestAccountUserTitle";
import { HMPROTESTFEATURE_TITLE_FIELD } from "../hmProtestFeature/HmProtestFeatureTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <ReferenceField
          label="hm_protest_account_user"
          source="hmprotestaccountuser.id"
          reference="HmProtestAccountUser"
        >
          <TextField source={HMPROTESTACCOUNTUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="hm_protest_feature"
          source="hmprotestfeature.id"
          reference="HmProtestFeature"
        >
          <TextField source={HMPROTESTFEATURE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_desc" source="userDesc" />
        <TextField label="user_end_date" source="userEndDate" />
        <TextField label="Username" source="username" />
        <TextField label="user_plan" source="userPlan" />
        <TextField label="user_status" source="userStatus" />
        <TextField label="user_st_date" source="userStDate" />
      </Datagrid>
    </List>
  );
};
