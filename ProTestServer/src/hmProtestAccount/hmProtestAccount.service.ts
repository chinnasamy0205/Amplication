import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HmProtestAccountServiceBase } from "./base/hmProtestAccount.service.base";

@Injectable()
export class HmProtestAccountService extends HmProtestAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
