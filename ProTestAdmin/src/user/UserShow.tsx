import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ACCOUNTUSER_TITLE_FIELD } from "../accountUser/AccountUserTitle";
import { FEATURE_TITLE_FIELD } from "../feature/FeatureTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
