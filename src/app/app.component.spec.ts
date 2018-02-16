import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
// Angular Material Components
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PropertyComponent } from './components/property/property.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should create a results column', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.results')).toBeTruthy();
  });
  it('should create a saved column', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.saved')).toBeTruthy();
  });

  it('should add to saved column on add', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    let propertyToAdd = {
      "price": "$726,500",
      "agency": {
        "brandingColors": {
          "primary": "#ffe512"
        },
        "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
      },
      "id": "1",
      "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }
    component.onSave(propertyToAdd);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const savedLength = component.saved.length;
    expect(component.saved[savedLength - 1]).toEqual(propertyToAdd);
  });

  it('should remove from saved column on remove', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    let propertyIndexToRemove = 0;
    component.onRemove(propertyIndexToRemove);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const savedLength = component.saved.length;
    expect(savedLength).toEqual(0);
  });
});
