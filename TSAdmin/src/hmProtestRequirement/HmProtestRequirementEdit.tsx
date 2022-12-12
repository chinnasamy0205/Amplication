import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { HmProtestFeatureTitle } from "../hmProtestFeature/HmProtestFeatureTitle";
import { UserTitle } from "../user/UserTitle";

export const HmProtestRequirementEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="modelChanged" source="modelChanged" />
        <TextInput label="req_desc" source="reqDesc" />
        <ReferenceArrayInput
          source="reqFeatureId"
          reference="HmProtestFeature"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HmProtestFeatureTitle} />
        </ReferenceArrayInput>
        <TextInput label="req_id" source="reqId" />
        <TextInput label="req_modelname" source="reqModelname" />
        <TextInput label="req_modelpath" source="reqModelpath" />
        <TextInput label="req_name" source="reqName" />
        <TextInput label="req_prereq" source="reqPrereq" />
        <TextInput label="req_type" source="reqType" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "InActive", value: "InActive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
