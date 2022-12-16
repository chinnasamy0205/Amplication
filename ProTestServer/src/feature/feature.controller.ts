import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeatureService } from "./feature.service";
import { FeatureControllerBase } from "./base/feature.controller.base";

@swagger.ApiTags("features")
@common.Controller("features")
export class FeatureController extends FeatureControllerBase {
  constructor(
    protected readonly service: FeatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
