import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const CategorymgtEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateRefT" source="dateRefT" />
        <DateTimeInput label="DateRefT1" source="dateRefT1" />
        <NumberInput step={1} label="Incremental" source="increment" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="TotalRecord" source="totalRecord" />
        <TextInput label="Url" source="url" />
        <TextInput label="WebsiteName" source="websiteName" />
      </SimpleForm>
    </Edit>
  );
};
