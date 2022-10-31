import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CategorymgtList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Categorymgts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
