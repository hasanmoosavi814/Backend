import { ImageService } from "../services/image.service";
import { Controller } from "@nestjs/common";

@Controller("image")
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
}
