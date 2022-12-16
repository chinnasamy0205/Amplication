import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountUserService } from "./accountUser.service";
import { AccountUserControllerBase } from "./base/accountUser.controller.base";

@swagger.ApiTags("accountUsers")
@common.Controller("accountUsers")
export class AccountUserController extends AccountUserControllerBase {
  constructor(
    protected readonly service: AccountUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
