import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HmProtestRequirementService } from "./hmProtestRequirement.service";
import { HmProtestRequirementControllerBase } from "./base/hmProtestRequirement.controller.base";

@swagger.ApiTags("hmProtestRequirements")
@common.Controller("hmProtestRequirements")
export class HmProtestRequirementController extends HmProtestRequirementControllerBase {
  constructor(
    protected readonly service: HmProtestRequirementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
