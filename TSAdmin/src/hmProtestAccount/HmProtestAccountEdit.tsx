import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HmProtestAccountUserTitle } from "../hmProtestAccountUser/HmProtestAccountUserTitle";
import { HmProtestProjectTitle } from "../hmProtestProject/HmProtestProjectTitle";
import { UserTitle } from "../user/UserTitle";

export const HmProtestAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account_bdm" source="accountBdm" />
        <TextInput label="account_desc" source="accountDesc" />
        <TextInput label="account_dm" source="accountDm" />
        <DateTimeInput label="account_end_date" source="accountEndDate" />
        <TextInput label="account_id" source="accountId" />
        <TextInput label="account_name" source="accountName" />
        <TextInput label="account_pm" source="accountPm" />
        <SelectInput
          source="accountStatus"
          label="account_status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "InActive", value: "InActive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="account_st_date" source="accountStDate" />
        <ReferenceArrayInput
          source="hmProtestAccountUsers"
          reference="HmProtestAccountUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestAccountUserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hmProtestProjects"
          reference="HmProtestProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userId"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
