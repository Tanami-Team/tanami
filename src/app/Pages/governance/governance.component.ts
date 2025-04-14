import { Component } from '@angular/core';
import { HeaderTanamiComponent } from "../../shared/header-tanami/header-tanami.component";
import { AboutHeaderComponent } from "../../shared/about-header/about-header.component";
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-governance',
  imports: [HeaderTanamiComponent, AboutHeaderComponent, SectionTitleComponent,CommonModule],
  templateUrl: './governance.component.html',
  styleUrl: './governance.component.css'
})
export class GovernanceComponent {
  documents = Array(18).fill({
    title: 'القوائم المالية 2022م',
    fileLink: '#',
    icon: 'assets/images/document.png'
  });
}
