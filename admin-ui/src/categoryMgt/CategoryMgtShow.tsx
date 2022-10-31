import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CategoryMgtShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateRefT" source="dateRefT" />
        <TextField label="DaterefT1" source="daterefT1" />
        <TextField label="ID" source="id" />
        <TextField label="Increment" source="increment" />
        <TextField label="Status" source="status" />
        <TextField label="TotalRecord" source="totalRecord" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <TextField label="Websitename" source="websitename" />
      </SimpleShowLayout>
    </Show>
  );
};
