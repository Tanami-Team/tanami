import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() products: { name: string; image: string }[] = [];
  @Input() containerWidth: string = 'w-[90%]'; // Default width
  @Input() showArrows: boolean = true; // Default: show arrows
  @Input() numVisible: number = 5; // Default: show arrows
  currentSlide = 0;

  onSlideChange(index: any) {
    this.currentSlide = index;
  }

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '480px',
      numVisible: 1.5,
      numScroll: 1,
    },
  ];
}
