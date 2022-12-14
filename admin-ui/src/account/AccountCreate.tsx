import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
          source="userId"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
