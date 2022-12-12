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
import { CategoryMgt2Service } from "../categoryMgt2.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CategoryMgt2CreateInput } from "./CategoryMgt2CreateInput";
import { CategoryMgt2WhereInput } from "./CategoryMgt2WhereInput";
import { CategoryMgt2WhereUniqueInput } from "./CategoryMgt2WhereUniqueInput";
import { CategoryMgt2FindManyArgs } from "./CategoryMgt2FindManyArgs";
import { CategoryMgt2UpdateInput } from "./CategoryMgt2UpdateInput";
import { CategoryMgt2 } from "./CategoryMgt2";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CategoryMgt2ControllerBase {
  constructor(
    protected readonly service: CategoryMgt2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CategoryMgt2",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CategoryMgt2 })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CategoryMgt2CreateInput
  ): Promise<CategoryMgt2> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        dateRefT: true,
        dateRefT1: true,
        id: true,
        incremental: true,
        status: true,
        totalCount: true,
        updatedAt: true,
        url: true,
        websiteName: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CategoryMgt2",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [CategoryMgt2] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CategoryMgt2FindManyArgs)
  async findMany(@common.Req() request: Request): Promise<CategoryMgt2[]> {
    const args = plainToClass(CategoryMgt2FindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateRefT: true,
        dateRefT1: true,
        id: true,
        incremental: true,
        status: true,
        totalCount: true,
        updatedAt: true,
        url: true,
        websiteName: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CategoryMgt2",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CategoryMgt2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CategoryMgt2WhereUniqueInput
  ): Promise<CategoryMgt2 | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateRefT: true,
        dateRefT1: true,
        id: true,
        incremental: true,
        status: true,
        totalCount: true,
        updatedAt: true,
        url: true,
        websiteName: true,
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
    resource: "CategoryMgt2",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CategoryMgt2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CategoryMgt2WhereUniqueInput,
    @common.Body() data: CategoryMgt2UpdateInput
  ): Promise<CategoryMgt2 | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dateRefT: true,
          dateRefT1: true,
          id: true,
          incremental: true,
          status: true,
          totalCount: true,
          updatedAt: true,
          url: true,
          websiteName: true,
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
    resource: "CategoryMgt2",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CategoryMgt2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CategoryMgt2WhereUniqueInput
  ): Promise<CategoryMgt2 | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateRefT: true,
          dateRefT1: true,
          id: true,
          incremental: true,
          status: true,
          totalCount: true,
          updatedAt: true,
          url: true,
          websiteName: true,
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
}
