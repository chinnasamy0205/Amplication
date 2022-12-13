import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HmProtestFeatureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"hm_protest_features"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="feature_desc" source="featureDesc" />
        <TextField label="feature_end_date" source="featureEndDate" />
        <TextField label="feature_id" source="featureId" />
        <TextField label="feature_name" source="featureName" />
        <TextField label="feature_prereq" source="featurePrereq" />
        <TextField label="feature_projId" source="featureProjId" />
        <TextField label="feature_st_date" source="featureStDate" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
