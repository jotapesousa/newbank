import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaBancariaGeralComponent } from './conta-bancaria-geral.component';

describe('ContaBancariaGeralComponent', () => {
  let component: ContaBancariaGeralComponent;
  let fixture: ComponentFixture<ContaBancariaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaBancariaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaBancariaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
