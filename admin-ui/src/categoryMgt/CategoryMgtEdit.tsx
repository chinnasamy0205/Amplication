import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CategoryMgtEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateRefT" source="dateRefT" />
        <DateTimeInput label="DaterefT1" source="daterefT1" />
        <TextInput label="Increment" source="increment" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="TotalRecord" source="totalRecord" />
        <TextInput label="url" source="url" />
        <TextInput label="Websitename" source="websitename" />
      </SimpleForm>
    </Edit>
  );
};
