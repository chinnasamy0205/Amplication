import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";

export const PartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Height" source="height" />
        <ReferenceInput
          source="inventory.id"
          reference="Inventory"
          label="Inventory"
        >
          <SelectInput optionText={InventoryTitle} />
        </ReferenceInput>
        <TextInput label="Length" source="length" />
        <TextInput label="PartName" source="partName" />
        <TextInput label="PartNumber" source="partNumber" />
        <TextInput label="Unit" source="unit" />
        <TextInput label="Weight" source="weight" />
        <TextInput label="Width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
