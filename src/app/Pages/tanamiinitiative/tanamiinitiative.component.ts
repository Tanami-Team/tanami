import { Component } from '@angular/core';
import { PorgramCardComponent } from "../../components/porgram-card/porgram-card.component";
import { ProgramModalComponent } from "../../components/program-modal/program-modal.component";

@Component({
  selector: 'app-tanamiinitiative',
  imports: [PorgramCardComponent, ProgramModalComponent],
  templateUrl: './tanamiinitiative.component.html',
  styleUrl: './tanamiinitiative.component.css'
})
export class TanamiinitiativeComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
