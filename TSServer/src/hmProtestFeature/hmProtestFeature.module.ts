import { Module } from "@nestjs/common";
import { HmProtestFeatureModuleBase } from "./base/hmProtestFeature.module.base";
import { HmProtestFeatureService } from "./hmProtestFeature.service";
import { HmProtestFeatureController } from "./hmProtestFeature.controller";
import { HmProtestFeatureResolver } from "./hmProtestFeature.resolver";

@Module({
  imports: [HmProtestFeatureModuleBase],
  controllers: [HmProtestFeatureController],
  providers: [HmProtestFeatureService, HmProtestFeatureResolver],
  exports: [HmProtestFeatureService],
})
export class HmProtestFeatureModule {}
