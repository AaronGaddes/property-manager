import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input('property') property: Property;
  @Input('action') action: 'ADD' | 'REMOVE' = 'ADD';

  @Output('onActionEmitter') onActionEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  
  onAction() {
    this.onActionEmitter.emit();
  }

}
