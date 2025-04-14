import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input() mainText: string = '';
  @Input() secondaryText: string = '';
  @Input() color: string = 'text-[#02527D]';
  @Input() showRightDecoration: boolean = true; 
  @Input() mainheader: boolean = true; 
  @Input() marignAuto: string = ""; 

  get textSizeClass(): string {
    return this.mainheader ? 'text-3xl font-bold' : 'text-2xl font-medium';
  }
  get textColorClass(): string {
    return this.color === 'white' ? 'text-white' : 'text-[#02527D]';
  }
  get textMariginClass(): string {
    return this.marignAuto  ;
  }
}
