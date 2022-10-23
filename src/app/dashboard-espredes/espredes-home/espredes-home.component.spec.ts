import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspredesHomeComponent } from './espredes-home.component';

describe('EspredesHomeComponent', () => {
  let component: EspredesHomeComponent;
  let fixture: ComponentFixture<EspredesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspredesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspredesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
