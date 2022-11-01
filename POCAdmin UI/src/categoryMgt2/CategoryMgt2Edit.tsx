import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CategoryMgt2Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="DateRefT" source="dateRefT" />
        <DateTimeInput label="DateRefT1" source="dateRefT1" />
        <TextInput label="Incremental" source="incremental" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Option 1", value: "Option1" },
            { label: "Active", value: "Active" },
            { label: "In Active", value: "InActive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="TotalCount" source="totalCount" />
        <TextInput label="Url" source="url" />
        <TextInput label="WebsiteName" source="websiteName" />
      </SimpleForm>
    </Edit>
  );
};
