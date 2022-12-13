import { Module } from "@nestjs/common";
import { HmProtestProjectModuleBase } from "./base/hmProtestProject.module.base";
import { HmProtestProjectService } from "./hmProtestProject.service";
import { HmProtestProjectController } from "./hmProtestProject.controller";
import { HmProtestProjectResolver } from "./hmProtestProject.resolver";

@Module({
  imports: [HmProtestProjectModuleBase],
  controllers: [HmProtestProjectController],
  providers: [HmProtestProjectService, HmProtestProjectResolver],
  exports: [HmProtestProjectService],
})
export class HmProtestProjectModule {}
