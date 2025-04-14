import { Component, OnInit } from '@angular/core';
import { InputsComponent } from "../../../shared/inputs/inputs.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-individualogin',
  imports: [InputsComponent, CommonModule,RouterLink],
  templateUrl: './individualogin.component.html',
  styleUrls: ['./individualogin.component.css']
})
export class IndividualoginComponent implements OnInit {
  
  type: string | undefined;  // type is now optional (it can be string or undefined)
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    // Capture the type query parameter from the URL
    this.route.queryParams.subscribe(params => {
      this.type = params['type']; // Get the type, which can be 'individual' or 'association'
      console.log('Type:', this.type); // Check the value of the type
    });
  }
}
