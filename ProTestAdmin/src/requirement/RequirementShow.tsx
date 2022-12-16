import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const RequirementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="modelChanged" source="modelChanged" />
        <TextField label="req_desc" source="reqDesc" />
        <TextField label="req_id" source="reqId" />
        <TextField label="req_modelname" source="reqModelname" />
        <TextField label="req_modelpath" source="reqModelpath" />
        <TextField label="req_name" source="reqName" />
        <TextField label="req_prereq" source="reqPrereq" />
        <TextField label="req_type" source="reqType" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
