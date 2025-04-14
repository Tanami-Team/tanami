import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-program-modal',
  imports: [CommonModule],
  templateUrl: './program-modal.component.html',
  styleUrl: './program-modal.component.css'
})
export class ProgramModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
