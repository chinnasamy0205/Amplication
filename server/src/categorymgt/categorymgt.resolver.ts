import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CategorymgtResolverBase } from "./base/categorymgt.resolver.base";
import { Categorymgt } from "./base/Categorymgt";
import { CategorymgtService } from "./categorymgt.service";

@graphql.Resolver(() => Categorymgt)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategorymgtResolver extends CategorymgtResolverBase {
  constructor(
    protected readonly service: CategorymgtService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
