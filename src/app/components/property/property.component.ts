import { Component, OnInit, Input } from '@angular/core';

import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input('property') property: Property;

  constructor() { }

  ngOnInit() {
    
  }

}
