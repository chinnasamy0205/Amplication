import { Module } from "@nestjs/common";
import { CategoryMgtModuleBase } from "./base/categoryMgt.module.base";
import { CategoryMgtService } from "./categoryMgt.service";
import { CategoryMgtController } from "./categoryMgt.controller";
import { CategoryMgtResolver } from "./categoryMgt.resolver";

@Module({
  imports: [CategoryMgtModuleBase],
  controllers: [CategoryMgtController],
  providers: [CategoryMgtService, CategoryMgtResolver],
  exports: [CategoryMgtService],
})
export class CategoryMgtModule {}
