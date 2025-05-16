import { MediaService } from "../services/media.service";
import { Controller } from "@nestjs/common";

@Controller("media")
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}
}
