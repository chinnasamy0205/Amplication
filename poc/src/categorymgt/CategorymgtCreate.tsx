import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const CategorymgtCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
