import { Module } from "@nestjs/common";
import { DatabaseModule } from "./infra/database/database.module";


@Module({
    imports: [HttpModule, DatabaseModule],
})
export class AppModule{}