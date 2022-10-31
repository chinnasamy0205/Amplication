import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CategoryMgtResolverBase } from "./base/categoryMgt.resolver.base";
import { CategoryMgt } from "./base/CategoryMgt";
import { CategoryMgtService } from "./categoryMgt.service";

@graphql.Resolver(() => CategoryMgt)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryMgtResolver extends CategoryMgtResolverBase {
  constructor(
    protected readonly service: CategoryMgtService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
