import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosNoticiasComponent } from './filtros-noticias.component';

describe('FiltrosNoticiasComponent', () => {
  let component: FiltrosNoticiasComponent;
  let fixture: ComponentFixture<FiltrosNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosNoticiasComponent]
    });
    fixture = TestBed.createComponent(FiltrosNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
