/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SagasComponent } from './sagas.component';

describe('SagasComponent', () => {
  let component: SagasComponent;
  let fixture: ComponentFixture<SagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
