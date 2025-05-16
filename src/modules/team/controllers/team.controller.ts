import { TeamService } from "../services/team.service";
import { Controller } from "@nestjs/common";

@Controller("team")
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
}
