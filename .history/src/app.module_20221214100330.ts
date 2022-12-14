import { Module } from "@nestjs/common";
import { PrismaService } from "./infra/database/prisma.service";
import { HttpModule } from "./infra/http/dtos/http.module";

@Module({
    imports: [HttpModule],

})
export class AppModule{}