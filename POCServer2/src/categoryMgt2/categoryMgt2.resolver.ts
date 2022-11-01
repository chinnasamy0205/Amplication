import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CategoryMgt2ResolverBase } from "./base/categoryMgt2.resolver.base";
import { CategoryMgt2 } from "./base/CategoryMgt2";
import { CategoryMgt2Service } from "./categoryMgt2.service";

@graphql.Resolver(() => CategoryMgt2)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryMgt2Resolver extends CategoryMgt2ResolverBase {
  constructor(
    protected readonly service: CategoryMgt2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
