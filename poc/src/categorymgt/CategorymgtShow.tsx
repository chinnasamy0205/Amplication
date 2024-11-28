import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CategorymgtShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateRefT" source="dateRefT" />
        <TextField label="DateRefT1" source="dateRefT1" />
        <TextField label="ID" source="id" />
        <TextField label="Incremental" source="increment" />
        <TextField label="Status" source="status" />
        <TextField label="TotalRecord" source="totalRecord" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <TextField label="WebsiteName" source="websiteName" />
      </SimpleShowLayout>
    </Show>
  );
};
