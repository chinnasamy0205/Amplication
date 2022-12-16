import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FeatureServiceBase } from "./base/feature.service.base";

@Injectable()
export class FeatureService extends FeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
