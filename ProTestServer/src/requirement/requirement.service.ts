import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RequirementServiceBase } from "./base/requirement.service.base";

@Injectable()
export class RequirementService extends RequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
