import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryMgt2Service } from "./categoryMgt2.service";
import { CategoryMgt2ControllerBase } from "./base/categoryMgt2.controller.base";

@swagger.ApiTags("categoryMgt2s")
@common.Controller("categoryMgt2s")
export class CategoryMgt2Controller extends CategoryMgt2ControllerBase {
  constructor(
    protected readonly service: CategoryMgt2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
