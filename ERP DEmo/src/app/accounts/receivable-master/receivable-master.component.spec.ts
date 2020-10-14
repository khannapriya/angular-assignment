import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivableMasterComponent } from './receivable-master.component';

describe('ReceivableMasterComponent', () => {
  let component: ReceivableMasterComponent;
  let fixture: ComponentFixture<ReceivableMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivableMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivableMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
