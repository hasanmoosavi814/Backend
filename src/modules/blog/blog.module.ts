import { BlogController } from "./controllers/blog.controller";
import { BlogService } from "./services/blog.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
