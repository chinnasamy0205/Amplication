import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HmProtestRequirementResolverBase } from "./base/hmProtestRequirement.resolver.base";
import { HmProtestRequirement } from "./base/HmProtestRequirement";
import { HmProtestRequirementService } from "./hmProtestRequirement.service";

@graphql.Resolver(() => HmProtestRequirement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HmProtestRequirementResolver extends HmProtestRequirementResolverBase {
  constructor(
    protected readonly service: HmProtestRequirementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
