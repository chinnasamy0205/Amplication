import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AnswerServiceBase } from "./base/answer.service.base";

@Injectable()
export class AnswerService extends AnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
