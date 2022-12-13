import { Module } from "@nestjs/common";
import { HmProtestRequirementModuleBase } from "./base/hmProtestRequirement.module.base";
import { HmProtestRequirementService } from "./hmProtestRequirement.service";
import { HmProtestRequirementController } from "./hmProtestRequirement.controller";
import { HmProtestRequirementResolver } from "./hmProtestRequirement.resolver";

@Module({
  imports: [HmProtestRequirementModuleBase],
  controllers: [HmProtestRequirementController],
  providers: [HmProtestRequirementService, HmProtestRequirementResolver],
  exports: [HmProtestRequirementService],
})
export class HmProtestRequirementModule {}
