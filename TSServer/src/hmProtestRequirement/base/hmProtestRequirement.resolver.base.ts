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
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateHmProtestRequirementArgs } from "./CreateHmProtestRequirementArgs";
import { UpdateHmProtestRequirementArgs } from "./UpdateHmProtestRequirementArgs";
import { DeleteHmProtestRequirementArgs } from "./DeleteHmProtestRequirementArgs";
import { HmProtestRequirementFindManyArgs } from "./HmProtestRequirementFindManyArgs";
import { HmProtestRequirementFindUniqueArgs } from "./HmProtestRequirementFindUniqueArgs";
import { HmProtestRequirement } from "./HmProtestRequirement";
import { HmProtestFeatureFindManyArgs } from "../../hmProtestFeature/base/HmProtestFeatureFindManyArgs";
import { HmProtestFeature } from "../../hmProtestFeature/base/HmProtestFeature";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { HmProtestRequirementService } from "../hmProtestRequirement.service";

@graphql.Resolver(() => HmProtestRequirement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HmProtestRequirementResolverBase {
  constructor(
    protected readonly service: HmProtestRequirementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "read",
    possession: "any",
  })
  async _hmProtestRequirementsMeta(
    @graphql.Args() args: HmProtestRequirementFindManyArgs
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
  @graphql.Query(() => [HmProtestRequirement])
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "read",
    possession: "any",
  })
  async hmProtestRequirements(
    @graphql.Args() args: HmProtestRequirementFindManyArgs
  ): Promise<HmProtestRequirement[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HmProtestRequirement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "read",
    possession: "own",
  })
  async hmProtestRequirement(
    @graphql.Args() args: HmProtestRequirementFindUniqueArgs
  ): Promise<HmProtestRequirement | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HmProtestRequirement)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "create",
    possession: "any",
  })
  async createHmProtestRequirement(
    @graphql.Args() args: CreateHmProtestRequirementArgs
  ): Promise<HmProtestRequirement> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HmProtestRequirement)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  async updateHmProtestRequirement(
    @graphql.Args() args: UpdateHmProtestRequirementArgs
  ): Promise<HmProtestRequirement | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => HmProtestRequirement)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "delete",
    possession: "any",
  })
  async deleteHmProtestRequirement(
    @graphql.Args() args: DeleteHmProtestRequirementArgs
  ): Promise<HmProtestRequirement | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [HmProtestFeature])
  @nestAccessControl.UseRoles({
    resource: "HmProtestFeature",
    action: "read",
    possession: "any",
  })
  async reqFeatureId(
    @graphql.Parent() parent: HmProtestRequirement,
    @graphql.Args() args: HmProtestFeatureFindManyArgs
  ): Promise<HmProtestFeature[]> {
    const results = await this.service.findReqFeatureId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async userId(
    @graphql.Parent() parent: HmProtestRequirement,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUserId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
