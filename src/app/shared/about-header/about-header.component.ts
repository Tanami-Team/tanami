import { Component } from '@angular/core';

@Component({
  selector: 'app-about-header',
  imports: [],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.css'
})
export class AboutHeaderComponent {
  aboutTitle = 'عن الجمعية';
  aboutDescription = 'الجمعية الخيرية لتطوير العمل التنموي تنامي، هي جمعية متخصصة من أولى وزارات الموارد البشرية والتنمية الاجتماعية، تهدف إلى تطوير القطاع غير الربحي وتستهدف تقديم الدعم والمساعدة في تطوير أعمال الجمعيات.';
  aboutImage = 'assets/images/aboutHeader.png';
}
