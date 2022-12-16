import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RequirementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Requirements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
