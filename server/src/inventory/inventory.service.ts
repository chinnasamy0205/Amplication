import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InventoryServiceBase } from "./base/inventory.service.base";

@Injectable()
export class InventoryService extends InventoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
