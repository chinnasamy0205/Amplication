import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HMPROTESTACCOUNTUSER_TITLE_FIELD } from "./HmProtestAccountUserTitle";
import { HMPROTESTFEATURE_TITLE_FIELD } from "../hmProtestFeature/HmProtestFeatureTitle";

export const HmProtestAccountUserShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_account_role" source="userAccountRole" />
        <ReferenceManyField
          reference="User"
          target="HmProtestAccountUserId"
          label="Users"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
