import { HttpController } from "./controllers/http.controller";
import { HttpService } from "@nestjs/axios";
import { Module } from "@nestjs/common";

@Module({
  controllers: [HttpController],
  providers: [HttpService],
})
export class HttpModule {}
