import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CategoryMgtList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CategoryMgts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
