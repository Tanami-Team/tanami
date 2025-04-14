import { Component } from '@angular/core';
import { AddressComponent } from "../../components/address/address.component";
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";

@Component({
  selector: 'app-contact-us',
  imports: [AddressComponent, SectionTitleComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
