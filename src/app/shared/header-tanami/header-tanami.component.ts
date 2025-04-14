import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-tanami',
  imports: [CommonModule],
  templateUrl: './header-tanami.component.html',
  styleUrls: ['./header-tanami.component.css']
})
export class HeaderTanamiComponent {
  @Input() headerText: string = ''; // Header text input
  @Input() description: string = ''; // Description text input
  @Input() imageSrc: string = ''; // Image source input
  @Input() backgroundGradient: string = 'radial-gradient(circle at 15% 50%, #10a1f0 15%, #034466 50%)'; // Default background gradient
}
