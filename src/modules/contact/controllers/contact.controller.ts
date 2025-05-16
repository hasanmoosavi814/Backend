import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Controller } from "@nestjs/common";
import { ContactService } from "../services/contact.service";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
}
