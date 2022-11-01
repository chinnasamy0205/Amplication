import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategoryMgtServiceBase } from "./base/categoryMgt.service.base";

@Injectable()
export class CategoryMgtService extends CategoryMgtServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
