import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaBuscaComponent } from './forma-busca.component';

describe('FormaBuscaComponent', () => {
  let component: FormaBuscaComponent;
  let fixture: ComponentFixture<FormaBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaBuscaComponent]
    });
    fixture = TestBed.createComponent(FormaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
