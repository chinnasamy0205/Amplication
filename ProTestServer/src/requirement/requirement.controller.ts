import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RequirementService } from "./requirement.service";
import { RequirementControllerBase } from "./base/requirement.controller.base";

@swagger.ApiTags("requirements")
@common.Controller("requirements")
export class RequirementController extends RequirementControllerBase {
  constructor(
    protected readonly service: RequirementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
