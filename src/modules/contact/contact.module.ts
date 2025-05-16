import { ContactController } from "./controllers/contact.controller";
import { ContactService } from "./services/contact.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
