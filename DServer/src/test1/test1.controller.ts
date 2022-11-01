import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Test1Service } from "./test1.service";
import { Test1ControllerBase } from "./base/test1.controller.base";

@swagger.ApiTags("test1s")
@common.Controller("test1s")
export class Test1Controller extends Test1ControllerBase {
  constructor(
    protected readonly service: Test1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
