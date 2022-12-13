import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HmProtestProjectServiceBase } from "./base/hmProtestProject.service.base";

@Injectable()
export class HmProtestProjectService extends HmProtestProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
