/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteTest1Args } from "./DeleteTest1Args";
import { Test1FindManyArgs } from "./Test1FindManyArgs";
import { Test1FindUniqueArgs } from "./Test1FindUniqueArgs";
import { Test1 } from "./Test1";
import { Test1Service } from "../test1.service";

@graphql.Resolver(() => Test1)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class Test1ResolverBase {
  constructor(
    protected readonly service: Test1Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Test1",
    action: "read",
    possession: "any",
  })
  async _test1sMeta(
    @graphql.Args() args: Test1FindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Test1])
  @nestAccessControl.UseRoles({
    resource: "Test1",
    action: "read",
    possession: "any",
  })
  async test1s(@graphql.Args() args: Test1FindManyArgs): Promise<Test1[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Test1, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Test1",
    action: "read",
    possession: "own",
  })
  async test1(
    @graphql.Args() args: Test1FindUniqueArgs
  ): Promise<Test1 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Test1)
  @nestAccessControl.UseRoles({
    resource: "Test1",
    action: "delete",
    possession: "any",
  })
  async deleteTest1(
    @graphql.Args() args: DeleteTest1Args
  ): Promise<Test1 | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
