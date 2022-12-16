import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FeatureResolverBase } from "./base/feature.resolver.base";
import { Feature } from "./base/Feature";
import { FeatureService } from "./feature.service";

@graphql.Resolver(() => Feature)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FeatureResolver extends FeatureResolverBase {
  constructor(
    protected readonly service: FeatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
