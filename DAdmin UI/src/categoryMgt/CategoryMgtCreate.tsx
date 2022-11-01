import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CategoryMgtCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="DateRefT" source="dateRefT" />
        <DateTimeInput label="DateRefT1" source="dateRefT1" />
        <TextInput label="Incremental" source="incremental" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "In Ative", value: "InAtive" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="TotalCount" source="totalCount" />
        <TextInput label="Url" source="url" />
        <TextInput label="WebsiteName" source="websiteName" />
      </SimpleForm>
    </Create>
  );
};
