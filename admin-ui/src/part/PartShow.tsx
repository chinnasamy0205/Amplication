import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INVENTORY_TITLE_FIELD } from "../inventory/InventoryTitle";

export const PartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
