import { Module } from "@nestjs/common";
import { Test1ModuleBase } from "./base/test1.module.base";
import { Test1Service } from "./test1.service";
import { Test1Controller } from "./test1.controller";
import { Test1Resolver } from "./test1.resolver";

@Module({
  imports: [Test1ModuleBase],
  controllers: [Test1Controller],
  providers: [Test1Service, Test1Resolver],
  exports: [Test1Service],
})
export class Test1Module {}
