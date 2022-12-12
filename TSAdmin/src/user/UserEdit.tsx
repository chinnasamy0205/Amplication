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

import { HmProtestAccountTitle } from "../hmProtestAccount/HmProtestAccountTitle";
import { HmProtestAccountUserTitle } from "../hmProtestAccountUser/HmProtestAccountUserTitle";
import { HmProtestFeatureTitle } from "../hmProtestFeature/HmProtestFeatureTitle";
import { HmProtestProjectTitle } from "../hmProtestProject/HmProtestProjectTitle";
import { HmProtestRequirementTitle } from "../hmProtestRequirement/HmProtestRequirementTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="hmProtestAccounts"
          reference="HmProtestAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestAccountTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="hmprotestaccountuser.id"
          reference="HmProtestAccountUser"
          label="hm_protest_account_user"
        >
          <SelectInput optionText={HmProtestAccountUserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="hmprotestfeature.id"
          reference="HmProtestFeature"
          label="hm_protest_feature"
        >
          <SelectInput optionText={HmProtestFeatureTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="hmProtestProjects"
          reference="HmProtestProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hmProtestRequirements"
          reference="HmProtestRequirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestRequirementTitle} />
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
