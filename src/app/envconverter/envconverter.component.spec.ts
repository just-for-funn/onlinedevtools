import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvconverterComponent } from './envconverter.component';

describe('EnvconverterComponent', () => {
  let component: EnvconverterComponent;
  let fixture: ComponentFixture<EnvconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
