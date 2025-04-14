import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
   @Input() labelText: string = '';  // Label text
  @Input() placeholder: string = ''; // Placeholder text
  @Input() id: string = '';         // Input field ID
  @Input() type: string = 'text';   // Default type is 'text'
}
