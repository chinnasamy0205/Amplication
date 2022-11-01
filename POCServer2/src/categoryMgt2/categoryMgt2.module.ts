import { Module } from "@nestjs/common";
import { CategoryMgt2ModuleBase } from "./base/categoryMgt2.module.base";
import { CategoryMgt2Service } from "./categoryMgt2.service";
import { CategoryMgt2Controller } from "./categoryMgt2.controller";
import { CategoryMgt2Resolver } from "./categoryMgt2.resolver";

@Module({
  imports: [CategoryMgt2ModuleBase],
  controllers: [CategoryMgt2Controller],
  providers: [CategoryMgt2Service, CategoryMgt2Resolver],
  exports: [CategoryMgt2Service],
})
export class CategoryMgt2Module {}
