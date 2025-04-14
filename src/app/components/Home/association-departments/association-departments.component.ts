import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-association-departments',
  
  imports: [SectionTitleComponent,CommonModule],
  templateUrl: './association-departments.component.html',
  styleUrl: './association-departments.component.css'
})
export class AssociationDepartmentsComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/slide1.png',
    'assets/images/slide2.png',
    'assets/images/slide3.png'
  ];

  currentIndex: number = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 2000); // Change image every 3 seconds
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  changeImage(index: number) {
    this.currentIndex = index;
    clearInterval(this.autoSlideInterval); // Reset interval on manual change
    this.startAutoSlide();
  }

  getNextImage(): string {
    return this.images[(this.currentIndex + 1) % this.images.length];
  }

  getNextNextImage(): string {
    return this.images[(this.currentIndex + 2) % this.images.length];
  }

  getCurrentImage(): string {
    return this.images[this.currentIndex];
  }
}
