import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDosComponent } from './barra-dos.component';

describe('BarraDosComponent', () => {
  let component: BarraDosComponent;
  let fixture: ComponentFixture<BarraDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
