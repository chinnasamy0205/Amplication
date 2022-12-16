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

import { ACCOUNTUSER_TITLE_FIELD } from "../accountUser/AccountUserTitle";
import { FEATURE_TITLE_FIELD } from "./FeatureTitle";

export const FeatureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="feature_desc" source="featureDesc" />
        <TextField label="feature_end_date" source="featureEndDate" />
        <TextField label="feature_id" source="featureId" />
        <TextField label="feature_name" source="featureName" />
        <TextField label="feature_prereq" source="featurePrereq" />
        <TextField label="feature_projId" source="featureProjId" />
        <TextField label="feature_st_date" source="featureStDate" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="FeatureId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <ReferenceField
              label="hm_protest_account_user"
              source="accountuser.id"
              reference="AccountUser"
            >
              <TextField source={ACCOUNTUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="hm_protest_feature"
              source="feature.id"
              reference="Feature"
            >
              <TextField source={FEATURE_TITLE_FIELD} />
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
