import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CategoryService } from "../services/category.service";
import { Controller } from "@nestjs/common";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
}
