import { Module } from "@nestjs/common";
import { DatabaseModule } from "./infra/database/database.module";
import { HttpModule } from "./infra/http/dtos/http.module";

@Module({
    imports: [HttpModule, DatabaseModule],
})
export class AppModule{}