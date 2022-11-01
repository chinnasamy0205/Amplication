import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Test1ServiceBase } from "./base/test1.service.base";

@Injectable()
export class Test1Service extends Test1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
