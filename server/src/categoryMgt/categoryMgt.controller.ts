import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryMgtService } from "./categoryMgt.service";
import { CategoryMgtControllerBase } from "./base/categoryMgt.controller.base";

@swagger.ApiTags("categoryMgts")
@common.Controller("categoryMgts")
export class CategoryMgtController extends CategoryMgtControllerBase {
  constructor(
    protected readonly service: CategoryMgtService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
