import { Component } from '@angular/core';
import { HeaderTanamiComponent } from "../../shared/header-tanami/header-tanami.component";
import { AboutHeaderComponent } from "../../shared/about-header/about-header.component";
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { TeamCardComponent } from "../../components/team-card/team-card.component";


@Component({
  selector: 'app-team',
  imports: [HeaderTanamiComponent, AboutHeaderComponent, SectionTitleComponent, TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
 
}
