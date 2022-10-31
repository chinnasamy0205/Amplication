import { Module } from "@nestjs/common";
import { CategorymgtModuleBase } from "./base/categorymgt.module.base";
import { CategorymgtService } from "./categorymgt.service";
import { CategorymgtController } from "./categorymgt.controller";
import { CategorymgtResolver } from "./categorymgt.resolver";

@Module({
  imports: [CategorymgtModuleBase],
  controllers: [CategorymgtController],
  providers: [CategorymgtService, CategorymgtResolver],
  exports: [CategorymgtService],
})
export class CategorymgtModule {}
