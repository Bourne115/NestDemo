import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";
import { DatabaseProviders } from "./database.providers";
import { SystemService } from "./system.service";

@Module({
  exports: [SystemService, ConfigModule, ...DatabaseProviders],
  providers: [SystemService, ...DatabaseProviders], 
  imports: [
    ConfigModule.forRoot(configModuleOptions)
  ]
})
export class SharedModule {

}