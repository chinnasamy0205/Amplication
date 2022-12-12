import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HmProtestFeatureService } from "./hmProtestFeature.service";
import { HmProtestFeatureControllerBase } from "./base/hmProtestFeature.controller.base";

@swagger.ApiTags("hmProtestFeatures")
@common.Controller("hmProtestFeatures")
export class HmProtestFeatureController extends HmProtestFeatureControllerBase {
  constructor(
    protected readonly service: HmProtestFeatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
