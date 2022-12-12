import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { HmProtestAccountTitle } from "../hmProtestAccount/HmProtestAccountTitle";
import { UserTitle } from "../user/UserTitle";

export const HmProtestProjectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountId"
          reference="HmProtestAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestAccountTitle} />
        </ReferenceArrayInput>
        <TextInput label="project_desc" source="projectDesc" />
        <DateTimeInput label="project_end_date" source="projectEndDate" />
        <TextInput label="project_id" source="projectId" />
        <TextInput label="project_name" source="projectName" />
        <DateTimeInput label="project_st_date" source="projectStDate" />
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
