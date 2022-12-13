import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HmProtestRequirementServiceBase } from "./base/hmProtestRequirement.service.base";

@Injectable()
export class HmProtestRequirementService extends HmProtestRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
