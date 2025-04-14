import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-home',
  imports: [ SectionTitleComponent,CommonModule],
  templateUrl: './about-home.component.html',
  styleUrl: './about-home.component.css'
})
export class AboutHomeComponent {
  @Input() about: boolean = true; // Default: show arrows

}
