import { Component, Input,  } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { cards } from '../../data/card-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-porgram-card',
  imports: [SectionTitleComponent,CommonModule,RouterLink],
  templateUrl: './porgram-card.component.html',
  styleUrl: './porgram-card.component.css'
})
export class PorgramCardComponent {
  cardData = cards;
  @Input() version: boolean = false;
}
