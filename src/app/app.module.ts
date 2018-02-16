import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Components
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PropertyComponent } from './components/property/property.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
