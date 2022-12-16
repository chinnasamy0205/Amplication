import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { AccountUserTitle } from "../accountUser/AccountUserTitle";
import { FeatureTitle } from "../feature/FeatureTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { RequirementTitle } from "../requirement/RequirementTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="hmProtestAccounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="accountuser.id"
          reference="AccountUser"
          label="hm_protest_account_user"
        >
          <SelectInput optionText={AccountUserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="feature.id"
          reference="Feature"
          label="hm_protest_feature"
        >
          <SelectInput optionText={FeatureTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="hmProtestProjects"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hmProtestRequirements"
          reference="Requirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequirementTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="user_desc" source="userDesc" />
        <DateTimeInput label="user_end_date" source="userEndDate" />
        <TextInput label="Username" source="username" />
        <SelectInput
          source="userPlan"
          label="user_plan"
          choices={[
            { label: "Basic", value: "Basic" },
            { label: "Full", value: "Full" },
            { label: "Free", value: "Free" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="userStatus"
          label="user_status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "InActive", value: "InActive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="user_st_date" source="userStDate" />
      </SimpleForm>
    </Edit>
  );
};
