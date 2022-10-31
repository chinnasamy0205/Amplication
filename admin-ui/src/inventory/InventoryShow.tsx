import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INVENTORY_TITLE_FIELD } from "./InventoryTitle";

export const InventoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="GrossAmount" source="grossAmount" />
        <TextField label="ID" source="id" />
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Part" target="InventoryId" label="Parts">
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Height" source="height" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Inventory"
              source="inventory.id"
              reference="Inventory"
            >
              <TextField source={INVENTORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Length" source="length" />
            <TextField label="PartName" source="partName" />
            <TextField label="PartNumber" source="partNumber" />
            <TextField label="Unit" source="unit" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Weight" source="weight" />
            <TextField label="Width" source="width" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
