import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilEMundoComponent } from './brasil-emundo.component';

describe('BrasilEMundoComponent', () => {
  let component: BrasilEMundoComponent;
  let fixture: ComponentFixture<BrasilEMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrasilEMundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilEMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
