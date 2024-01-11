import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTresComponent } from './barra-tres.component';

describe('BarraTresComponent', () => {
  let component: BarraTresComponent;
  let fixture: ComponentFixture<BarraTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
