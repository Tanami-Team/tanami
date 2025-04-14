import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProgramModalComponent } from "../../components/program-modal/program-modal.component";
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { CommonModule } from '@angular/common';
// import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-porgram-details',
  imports: [
    ProgramModalComponent,
    SectionTitleComponent,
    CommonModule,
    CarouselModule,
    CarouselComponent,
    CarouselModule,
  ],
  templateUrl: './porgram-details.component.html',
  styleUrl: './porgram-details.component.css',
})
export class PorgramDetailsComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
  slides = [
    { id: 2, name: 'Product 3', image: 'assets/images/mack.png' },
    { id: 1, name: 'Product 1', image: 'assets/images/lab.png' },
    { id: 3, name: 'Product 1', image: 'assets/images/lab.png' },
  ];

  trackByFn(index: number, item: any): any {
    return item.id;
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  myProducts2 = [
    { name: 'Product 1', image: 'assets/images/about.png' },
    // { name: 'Product 2', image: 'assets/images/teamofcollobrations.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
  ];
  documents = Array(4).fill({
    title: 'القوائم المالية 2022م',
    fileLink: '#',
    icon: 'assets/images/document.png',
  });


}
