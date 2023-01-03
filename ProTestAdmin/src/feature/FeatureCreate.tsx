import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { RequirementTitle } from "../requirement/RequirementTitle";
import { UserTitle } from "../user/UserTitle";

export const FeatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feature_desc" source="featureDesc" />
        <DateTimeInput label="feature_end_date" source="featureEndDate" />
        <TextInput label="feature_id" source="featureId" />
        <TextInput label="feature_name" source="featureName" />
        <TextInput label="feature_prereq" source="featurePrereq" />
        <ReferenceArrayInput
          source="featureProjId"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="feature_st_date" source="featureStDate" />
        <ReferenceArrayInput
          source="hmProtestRequirements"
          reference="Requirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequirementTitle} />
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
    </Create>
  );
};
