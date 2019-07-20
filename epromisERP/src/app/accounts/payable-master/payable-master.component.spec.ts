import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableMasterComponent } from './payable-master.component';

describe('PayableMasterComponent', () => {
  let component: PayableMasterComponent;
  let fixture: ComponentFixture<PayableMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayableMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayableMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
