import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const HmProtestProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="project_desc" source="projectDesc" />
        <TextField label="project_end_date" source="projectEndDate" />
        <TextField label="project_id" source="projectId" />
        <TextField label="project_name" source="projectName" />
        <TextField label="project_st_date" source="projectStDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
