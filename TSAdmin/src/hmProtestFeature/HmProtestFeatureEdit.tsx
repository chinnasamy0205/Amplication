import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HmProtestRequirementTitle } from "../hmProtestRequirement/HmProtestRequirementTitle";
import { UserTitle } from "../user/UserTitle";

export const HmProtestFeatureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="feature_desc" source="featureDesc" />
        <DateTimeInput label="feature_end_date" source="featureEndDate" />
        <TextInput label="feature_id" source="featureId" />
        <TextInput label="feature_name" source="featureName" />
        <TextInput label="feature_prereq" source="featurePrereq" />
        <TextInput label="feature_projId" source="featureProjId" />
        <DateTimeInput label="feature_st_date" source="featureStDate" />
        <ReferenceArrayInput
          source="hmProtestRequirements"
          reference="HmProtestRequirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestRequirementTitle} />
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
