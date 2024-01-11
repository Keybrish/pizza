import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClienteMenuComponent } from './page-cliente-menu.component';

describe('PageClienteMenuComponent', () => {
  let component: PageClienteMenuComponent;
  let fixture: ComponentFixture<PageClienteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClienteMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClienteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
