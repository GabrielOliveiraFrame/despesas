import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSenadoresComponent } from './lista-senadores.component';

describe('ListaSenadoresComponent', () => {
  let component: ListaSenadoresComponent;
  let fixture: ComponentFixture<ListaSenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
