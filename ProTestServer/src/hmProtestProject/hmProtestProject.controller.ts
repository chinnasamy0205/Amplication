import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HmProtestProjectService } from "./hmProtestProject.service";
import { HmProtestProjectControllerBase } from "./base/hmProtestProject.controller.base";

@swagger.ApiTags("hmProtestProjects")
@common.Controller("hmProtestProjects")
export class HmProtestProjectController extends HmProtestProjectControllerBase {
  constructor(
    protected readonly service: HmProtestProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
