import { Module } from "@nestjs/common";
import { HmProtestAccountModuleBase } from "./base/hmProtestAccount.module.base";
import { HmProtestAccountService } from "./hmProtestAccount.service";
import { HmProtestAccountController } from "./hmProtestAccount.controller";
import { HmProtestAccountResolver } from "./hmProtestAccount.resolver";

@Module({
  imports: [HmProtestAccountModuleBase],
  controllers: [HmProtestAccountController],
  providers: [HmProtestAccountService, HmProtestAccountResolver],
  exports: [HmProtestAccountService],
})
export class HmProtestAccountModule {}
