import { Component } from '@angular/core';
import { MainHomeComponent } from "../../components/Home/main-home/main-home.component";
import { AboutHomeComponent } from "../../components/Home/about-home/about-home.component";
import { AddressComponent } from "../../components/address/address.component";
import { HighlightedNumbersComponent } from "../../components/highlighted-numbers/highlighted-numbers.component";
import { AssociationDepartmentsComponent } from "../../components/Home/association-departments/association-departments.component";
import { ContactUsComponent } from "../../components/Home/contact-us/contact-us.component";
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { FeatureSectionComponent } from "../../components/Home/feature-section/feature-section.component";

@Component({
  selector: 'app-home',
  imports: [
    MainHomeComponent,
    AboutHomeComponent,
    AddressComponent,
    HighlightedNumbersComponent,
    AssociationDepartmentsComponent,
    ContactUsComponent,
    CarouselComponent,
    FeatureSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  myProducts = [
    { name: 'Product 1', image: 'assets/images/about.png' },
    // { name: 'Product 2', image: 'assets/images/teamofcollobrations.png'},
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
    { name: 'Product 3', image: 'assets/images/prod1.png' },
  ];
}
