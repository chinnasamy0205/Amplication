import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HmProtestFeatureResolverBase } from "./base/hmProtestFeature.resolver.base";
import { HmProtestFeature } from "./base/HmProtestFeature";
import { HmProtestFeatureService } from "./hmProtestFeature.service";

@graphql.Resolver(() => HmProtestFeature)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HmProtestFeatureResolver extends HmProtestFeatureResolverBase {
  constructor(
    protected readonly service: HmProtestFeatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
