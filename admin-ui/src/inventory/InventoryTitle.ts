import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "id";

export const InventoryTitle = (record: TInventory): string => {
  return record.id || record.id;
};
