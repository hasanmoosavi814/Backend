import { MediaController } from "./controllers/media.controller";
import { MediaService } from "./services/media.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
