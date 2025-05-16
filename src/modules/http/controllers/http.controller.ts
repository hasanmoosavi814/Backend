import { HttpService } from "@nestjs/axios";
import { CreateHttpDto } from "../dto/create-http.dto";
import { UpdateHttpDto } from "../dto/update-http.dto";
import { Controller } from "@nestjs/common";

@Controller("http")
export class HttpController {
  constructor(private readonly httpService: HttpService) {}
}
