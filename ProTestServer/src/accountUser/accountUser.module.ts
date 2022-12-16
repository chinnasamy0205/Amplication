import { Module } from "@nestjs/common";
import { AccountUserModuleBase } from "./base/accountUser.module.base";
import { AccountUserService } from "./accountUser.service";
import { AccountUserController } from "./accountUser.controller";
import { AccountUserResolver } from "./accountUser.resolver";

@Module({
  imports: [AccountUserModuleBase],
  controllers: [AccountUserController],
  providers: [AccountUserService, AccountUserResolver],
  exports: [AccountUserService],
})
export class AccountUserModule {}
