import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategorymgtServiceBase } from "./base/categorymgt.service.base";

@Injectable()
export class CategorymgtService extends CategorymgtServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
