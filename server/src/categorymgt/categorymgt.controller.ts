import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategorymgtService } from "./categorymgt.service";
import { CategorymgtControllerBase } from "./base/categorymgt.controller.base";

@swagger.ApiTags("categorymgts")
@common.Controller("categorymgts")
export class CategorymgtController extends CategorymgtControllerBase {
  constructor(
    protected readonly service: CategorymgtService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
