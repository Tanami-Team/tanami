  import { Component } from '@angular/core';
  import { PorgramCardComponent } from "../../components/porgram-card/porgram-card.component";
import { ProgramModalComponent } from "../../components/program-modal/program-modal.component";

  @Component({
    selector: 'app-tanami-tech',
    imports: [PorgramCardComponent, ProgramModalComponent],
    templateUrl: './tanami-tech.component.html',
    styleUrl: './tanami-tech.component.css'
  })
  export class TanamiTechComponent {
    showModal = false;

    openModal() {
      this.showModal = true;
    }
  
    closeModal() {
      this.showModal = false;
    }
  }
