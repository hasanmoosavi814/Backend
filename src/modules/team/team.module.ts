import { TeamController } from "./controllers/team.controller";
import { TeamService } from "./services/team.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
