import { Module } from "@nestjs/common";
import { RequirementModuleBase } from "./base/requirement.module.base";
import { RequirementService } from "./requirement.service";
import { RequirementController } from "./requirement.controller";
import { RequirementResolver } from "./requirement.resolver";

@Module({
  imports: [RequirementModuleBase],
  controllers: [RequirementController],
  providers: [RequirementService, RequirementResolver],
  exports: [RequirementService],
})
export class RequirementModule {}
