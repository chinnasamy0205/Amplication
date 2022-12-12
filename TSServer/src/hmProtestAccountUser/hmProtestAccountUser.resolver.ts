import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HmProtestAccountUserResolverBase } from "./base/hmProtestAccountUser.resolver.base";
import { HmProtestAccountUser } from "./base/HmProtestAccountUser";
import { HmProtestAccountUserService } from "./hmProtestAccountUser.service";

@graphql.Resolver(() => HmProtestAccountUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HmProtestAccountUserResolver extends HmProtestAccountUserResolverBase {
  constructor(
    protected readonly service: HmProtestAccountUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
