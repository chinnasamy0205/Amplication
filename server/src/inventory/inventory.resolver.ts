import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InventoryResolverBase } from "./base/inventory.resolver.base";
import { Inventory } from "./base/Inventory";
import { InventoryService } from "./inventory.service";

@graphql.Resolver(() => Inventory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InventoryResolver extends InventoryResolverBase {
  constructor(
    protected readonly service: InventoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
