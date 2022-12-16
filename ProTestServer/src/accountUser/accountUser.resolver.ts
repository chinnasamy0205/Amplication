import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AccountUserResolverBase } from "./base/accountUser.resolver.base";
import { AccountUser } from "./base/AccountUser";
import { AccountUserService } from "./accountUser.service";

@graphql.Resolver(() => AccountUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountUserResolver extends AccountUserResolverBase {
  constructor(
    protected readonly service: AccountUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
