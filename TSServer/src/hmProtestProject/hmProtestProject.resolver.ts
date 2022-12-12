import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HmProtestProjectResolverBase } from "./base/hmProtestProject.resolver.base";
import { HmProtestProject } from "./base/HmProtestProject";
import { HmProtestProjectService } from "./hmProtestProject.service";

@graphql.Resolver(() => HmProtestProject)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HmProtestProjectResolver extends HmProtestProjectResolverBase {
  constructor(
    protected readonly service: HmProtestProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
