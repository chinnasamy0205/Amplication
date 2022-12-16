import { Module } from "@nestjs/common";
import { FeatureModuleBase } from "./base/feature.module.base";
import { FeatureService } from "./feature.service";
import { FeatureController } from "./feature.controller";
import { FeatureResolver } from "./feature.resolver";

@Module({
  imports: [FeatureModuleBase],
  controllers: [FeatureController],
  providers: [FeatureService, FeatureResolver],
  exports: [FeatureService],
})
export class FeatureModule {}
