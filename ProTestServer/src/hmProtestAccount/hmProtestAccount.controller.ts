import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HmProtestAccountService } from "./hmProtestAccount.service";
import { HmProtestAccountControllerBase } from "./base/hmProtestAccount.controller.base";

@swagger.ApiTags("hmProtestAccounts")
@common.Controller("hmProtestAccounts")
export class HmProtestAccountController extends HmProtestAccountControllerBase {
  constructor(
    protected readonly service: HmProtestAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
