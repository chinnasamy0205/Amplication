import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AccountUserServiceBase } from "./base/accountUser.service.base";

@Injectable()
export class AccountUserService extends AccountUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
