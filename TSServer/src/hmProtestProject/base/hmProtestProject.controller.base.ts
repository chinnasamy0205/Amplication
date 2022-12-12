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
import { HmProtestProjectService } from "../hmProtestProject.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HmProtestProjectCreateInput } from "./HmProtestProjectCreateInput";
import { HmProtestProjectWhereInput } from "./HmProtestProjectWhereInput";
import { HmProtestProjectWhereUniqueInput } from "./HmProtestProjectWhereUniqueInput";
import { HmProtestProjectFindManyArgs } from "./HmProtestProjectFindManyArgs";
import { HmProtestProjectUpdateInput } from "./HmProtestProjectUpdateInput";
import { HmProtestProject } from "./HmProtestProject";
import { HmProtestAccountFindManyArgs } from "../../hmProtestAccount/base/HmProtestAccountFindManyArgs";
import { HmProtestAccount } from "../../hmProtestAccount/base/HmProtestAccount";
import { HmProtestAccountWhereUniqueInput } from "../../hmProtestAccount/base/HmProtestAccountWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HmProtestProjectControllerBase {
  constructor(
    protected readonly service: HmProtestProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestProject",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HmProtestProject })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: HmProtestProjectCreateInput
  ): Promise<HmProtestProject> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        projectDesc: true,
        projectEndDate: true,
        projectId: true,
        projectName: true,
        projectStDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestProject",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [HmProtestProject] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(HmProtestProjectFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<HmProtestProject[]> {
    const args = plainToClass(HmProtestProjectFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        projectDesc: true,
        projectEndDate: true,
        projectId: true,
        projectName: true,
        projectStDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HmProtestProject",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HmProtestProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: HmProtestProjectWhereUniqueInput
  ): Promise<HmProtestProject | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        projectDesc: true,
        projectEndDate: true,
        projectId: true,
        projectName: true,
        projectStDate: true,
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HmProtestProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
    @common.Body() data: HmProtestProjectUpdateInput
  ): Promise<HmProtestProject | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          projectDesc: true,
          projectEndDate: true,
          projectId: true,
          projectName: true,
          projectStDate: true,
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
    resource: "HmProtestProject",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HmProtestProject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: HmProtestProjectWhereUniqueInput
  ): Promise<HmProtestProject | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          projectDesc: true,
          projectEndDate: true,
          projectId: true,
          projectName: true,
          projectStDate: true,
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
    resource: "HmProtestAccount",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/accountId")
  @ApiNestedQuery(HmProtestAccountFindManyArgs)
  async findManyAccountId(
    @common.Req() request: Request,
    @common.Param() params: HmProtestProjectWhereUniqueInput
  ): Promise<HmProtestAccount[]> {
    const query = plainToClass(HmProtestAccountFindManyArgs, request.query);
    const results = await this.service.findAccountId(params.id, {
      ...query,
      select: {
        accountBdm: true,
        accountDesc: true,
        accountDm: true,
        accountEndDate: true,
        accountId: true,
        accountName: true,
        accountPm: true,
        accountStatus: true,
        accountStDate: true,
        createdAt: true,
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/accountId")
  async connectAccountId(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
    @common.Body() body: HmProtestAccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accountId: {
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/accountId")
  async updateAccountId(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
    @common.Body() body: HmProtestAccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accountId: {
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/accountId")
  async disconnectAccountId(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
    @common.Body() body: HmProtestAccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accountId: {
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
    @common.Param() params: HmProtestProjectWhereUniqueInput
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/userId")
  async connectUserId(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/userId")
  async updateUserId(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
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
    resource: "HmProtestProject",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/userId")
  async disconnectUserId(
    @common.Param() params: HmProtestProjectWhereUniqueInput,
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
