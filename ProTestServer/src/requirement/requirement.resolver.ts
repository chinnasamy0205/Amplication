import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RequirementResolverBase } from "./base/requirement.resolver.base";
import { Requirement } from "./base/Requirement";
import { RequirementService } from "./requirement.service";

@graphql.Resolver(() => Requirement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RequirementResolver extends RequirementResolverBase {
  constructor(
    protected readonly service: RequirementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
