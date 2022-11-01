import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategoryMgt2ServiceBase } from "./base/categoryMgt2.service.base";

@Injectable()
export class CategoryMgt2Service extends CategoryMgt2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
