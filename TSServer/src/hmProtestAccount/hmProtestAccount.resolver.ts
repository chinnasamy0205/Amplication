import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HmProtestAccountResolverBase } from "./base/hmProtestAccount.resolver.base";
import { HmProtestAccount } from "./base/HmProtestAccount";
import { HmProtestAccountService } from "./hmProtestAccount.service";

@graphql.Resolver(() => HmProtestAccount)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HmProtestAccountResolver extends HmProtestAccountResolverBase {
  constructor(
    protected readonly service: HmProtestAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
