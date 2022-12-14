import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
