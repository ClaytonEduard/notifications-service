import { Module } from "@nestjs/common";
import { HttpModule } from "./infra/http/dtos/http.module";

@Module({
    imports: [HttpModule],
    controllers: [HttpController],
    
})
export class AppModule{}