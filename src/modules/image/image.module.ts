import { ImageController } from "./controllers/image.controller";
import { ImageService } from "./services/image.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
