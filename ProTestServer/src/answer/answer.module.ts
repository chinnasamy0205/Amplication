import { Module } from "@nestjs/common";
import { AnswerModuleBase } from "./base/answer.module.base";
import { AnswerService } from "./answer.service";
import { AnswerController } from "./answer.controller";
import { AnswerResolver } from "./answer.resolver";

@Module({
  imports: [AnswerModuleBase],
  controllers: [AnswerController],
  providers: [AnswerService, AnswerResolver],
  exports: [AnswerService],
})
export class AnswerModule {}
