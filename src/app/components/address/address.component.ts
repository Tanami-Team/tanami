import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  imports: [SectionTitleComponent,CommonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class  AddressComponent {
  address: string = 'السعودية - الرياض - الامام مسلم - حي الزاهر';
  googleMapLink: string = 'https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85+%D9%85%D8%B3%D9%84%D9%85+%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9%E2%80%AD/@21.4455342,39.8047541,17z/data=!3m1!4b1!4m6!3m5!1s0x15c21ca86281eb53:0xa79ad08c890e188a!8m2!3d21.4455342!4d39.807329!16s%2Fg%2F11c2kcqql3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D';
  showToast: boolean = false;
  copyToClipboard() {
    navigator.clipboard.writeText(this.googleMapLink).then(() => {
      this.showToast = true; // Show toast
      setTimeout(() => {
        this.showToast = false; // Hide toast after 3 seconds
      }, 2000);
    }).catch(err => {
      console.error('فشل نسخ الرابط: ', err);
    });
  }
  
  
}
