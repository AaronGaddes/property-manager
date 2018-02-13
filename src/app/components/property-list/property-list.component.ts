import { Component, OnInit, Input } from '@angular/core';

import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  @Input('properties') properties:Array<Property>

  constructor() { }

  ngOnInit() {
  }

}
