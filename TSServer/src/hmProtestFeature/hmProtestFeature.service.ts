import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HmProtestFeatureServiceBase } from "./base/hmProtestFeature.service.base";

@Injectable()
export class HmProtestFeatureService extends HmProtestFeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
