import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HmProtestAccountUserServiceBase } from "./base/hmProtestAccountUser.service.base";

@Injectable()
export class HmProtestAccountUserService extends HmProtestAccountUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
