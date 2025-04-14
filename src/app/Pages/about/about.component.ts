import { Component } from '@angular/core';
import { HeaderTanamiComponent } from "../../shared/header-tanami/header-tanami.component";
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { HighlightedNumbersComponent } from "../../components/highlighted-numbers/highlighted-numbers.component";
import { AboutHomeComponent } from "../../components/Home/about-home/about-home.component";
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { AboutHeaderComponent } from "../../shared/about-header/about-header.component";

@Component({
  selector: 'app-about',
  imports: [HeaderTanamiComponent, CarouselComponent, HighlightedNumbersComponent, AboutHomeComponent, AboutHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  myProducts = [
    { name: 'Product 1',image: 'assets/images/about.png'},
    // { name: 'Product 2', image: 'assets/images/teamofcollobrations.png'},
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
  ];
}
