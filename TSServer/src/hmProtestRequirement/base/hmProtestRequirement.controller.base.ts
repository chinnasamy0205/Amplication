/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HmProtestRequirementService } from "../hmProtestRequirement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HmProtestRequirementCreateInput } from "./HmProtestRequirementCreateInput";
import { HmProtestRequirementWhereInput } from "./HmProtestRequirementWhereInput";
import { HmProtestRequirementWhereUniqueInput } from "./HmProtestRequirementWhereUniqueInput";
import { HmProtestRequirementFindManyArgs } from "./HmProtestRequirementFindManyArgs";
import { HmProtestRequirementUpdateInput } from "./HmProtestRequirementUpdateInput";
import { HmProtestRequirement } from "./HmProtestRequirement";
import { HmProtestFeatureFindManyArgs } from "../../hmProtestFeature/base/HmProtestFeatureFindManyArgs";
import { HmProtestFeature } from "../../hmProtestFeature/base/HmProtestFeature";
import { HmProtestFeatureWhereUniqueInput } from "../../hmProtestFeature/base/HmProtestFeatureWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HmProtestRequirementControllerBase {
  constructor(
    protected readonly service: HmProtestRequirementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HmProtestRequirement })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: HmProtestRequirementCreateInput
  ): Promise<HmProtestRequirement> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        modelChanged: true,
        reqDesc: true,
        reqId: true,
        reqModelname: true,
        reqModelpath: true,
        reqName: true,
        reqPrereq: true,
        reqType: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [HmProtestRequirement] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(HmProtestRequirementFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<HmProtestRequirement[]> {
    const args = plainToClass(HmProtestRequirementFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        modelChanged: true,
        reqDesc: true,
        reqId: true,
        reqModelname: true,
        reqModelpath: true,
        reqName: true,
        reqPrereq: true,
        reqType: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HmProtestRequirement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: HmProtestRequirementWhereUniqueInput
  ): Promise<HmProtestRequirement | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        modelChanged: true,
        reqDesc: true,
        reqId: true,
        reqModelname: true,
        reqModelpath: true,
        reqName: true,
        reqPrereq: true,
        reqType: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HmProtestRequirement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() data: HmProtestRequirementUpdateInput
  ): Promise<HmProtestRequirement | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          modelChanged: true,
          reqDesc: true,
          reqId: true,
          reqModelname: true,
          reqModelpath: true,
          reqName: true,
          reqPrereq: true,
          reqType: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HmProtestRequirement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: HmProtestRequirementWhereUniqueInput
  ): Promise<HmProtestRequirement | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          modelChanged: true,
          reqDesc: true,
          reqId: true,
          reqModelname: true,
          reqModelpath: true,
          reqName: true,
          reqPrereq: true,
          reqType: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestFeature",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/reqFeatureId")
  @ApiNestedQuery(HmProtestFeatureFindManyArgs)
  async findManyReqFeatureId(
    @common.Req() request: Request,
    @common.Param() params: HmProtestRequirementWhereUniqueInput
  ): Promise<HmProtestFeature[]> {
    const query = plainToClass(HmProtestFeatureFindManyArgs, request.query);
    const results = await this.service.findReqFeatureId(params.id, {
      ...query,
      select: {
        createdAt: true,
        featureDesc: true,
        featureEndDate: true,
        featureId: true,
        featureName: true,
        featurePrereq: true,
        featureProjId: true,
        featureStDate: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/reqFeatureId")
  async connectReqFeatureId(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() body: HmProtestFeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reqFeatureId: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/reqFeatureId")
  async updateReqFeatureId(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() body: HmProtestFeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reqFeatureId: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/reqFeatureId")
  async disconnectReqFeatureId(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() body: HmProtestFeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reqFeatureId: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/userId")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyUserId(
    @common.Req() request: Request,
    @common.Param() params: HmProtestRequirementWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUserId(params.id, {
      ...query,
      select: {
        createdAt: true,
        firstName: true,

        hmProtestAccountUser: {
          select: {
            id: true,
          },
        },

        hmProtestFeature: {
          select: {
            id: true,
          },
        },

        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        userDesc: true,
        userEndDate: true,
        username: true,
        userPlan: true,
        userStatus: true,
        userStDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/userId")
  async connectUserId(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/userId")
  async updateUserId(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "HmProtestRequirement",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/userId")
  async disconnectUserId(
    @common.Param() params: HmProtestRequirementWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
