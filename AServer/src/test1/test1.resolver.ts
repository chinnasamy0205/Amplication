import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { Test1ResolverBase } from "./base/test1.resolver.base";
import { Test1 } from "./base/Test1";
import { Test1Service } from "./test1.service";

@graphql.Resolver(() => Test1)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class Test1Resolver extends Test1ResolverBase {
  constructor(
    protected readonly service: Test1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
