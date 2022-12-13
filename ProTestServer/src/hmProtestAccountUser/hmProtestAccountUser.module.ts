import { Module } from "@nestjs/common";
import { HmProtestAccountUserModuleBase } from "./base/hmProtestAccountUser.module.base";
import { HmProtestAccountUserService } from "./hmProtestAccountUser.service";
import { HmProtestAccountUserController } from "./hmProtestAccountUser.controller";
import { HmProtestAccountUserResolver } from "./hmProtestAccountUser.resolver";

@Module({
  imports: [HmProtestAccountUserModuleBase],
  controllers: [HmProtestAccountUserController],
  providers: [HmProtestAccountUserService, HmProtestAccountUserResolver],
  exports: [HmProtestAccountUserService],
})
export class HmProtestAccountUserModule {}
