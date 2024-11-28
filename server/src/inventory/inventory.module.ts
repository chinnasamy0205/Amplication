import { Module } from "@nestjs/common";
import { InventoryModuleBase } from "./base/inventory.module.base";
import { InventoryService } from "./inventory.service";
import { InventoryController } from "./inventory.controller";
import { InventoryResolver } from "./inventory.resolver";

@Module({
  imports: [InventoryModuleBase],
  controllers: [InventoryController],
  providers: [InventoryService, InventoryResolver],
  exports: [InventoryService],
})
export class InventoryModule {}
