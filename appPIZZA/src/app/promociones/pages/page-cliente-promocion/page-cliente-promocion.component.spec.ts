import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientePromocionComponent } from './page-cliente-promocion.component';

describe('PageClientePromocionComponent', () => {
  let component: PageClientePromocionComponent;
  let fixture: ComponentFixture<PageClientePromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientePromocionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClientePromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
