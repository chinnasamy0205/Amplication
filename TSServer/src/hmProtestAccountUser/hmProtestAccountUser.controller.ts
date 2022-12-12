import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HmProtestAccountUserService } from "./hmProtestAccountUser.service";
import { HmProtestAccountUserControllerBase } from "./base/hmProtestAccountUser.controller.base";

@swagger.ApiTags("hmProtestAccountUsers")
@common.Controller("hmProtestAccountUsers")
export class HmProtestAccountUserController extends HmProtestAccountUserControllerBase {
  constructor(
    protected readonly service: HmProtestAccountUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
