import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media-center-card',
  imports: [RouterLink],
  templateUrl: './media-center-card.component.html',
  styleUrl: './media-center-card.component.css'
})
export class MediaCenterCardComponent {
  cardTitle: string = "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”";
  cardDescription: string = "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع.";
  date: string = "2 أكتوبر 2024";
  imageUrl: string = '/assets/images/Card.png'; // Add the actual path for your image
}
