import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HmProtestAccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"hm_protest_accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="account_bdm" source="accountBdm" />
        <TextField label="account_desc" source="accountDesc" />
        <TextField label="account_dm" source="accountDm" />
        <TextField label="account_end_date" source="accountEndDate" />
        <TextField label="account_id" source="accountId" />
        <TextField label="account_name" source="accountName" />
        <TextField label="account_pm" source="accountPm" />
        <TextField label="account_status" source="accountStatus" />
        <TextField label="account_st_date" source="accountStDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
