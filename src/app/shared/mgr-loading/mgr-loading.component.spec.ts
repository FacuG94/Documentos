import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MgrLoadingComponent } from './mgr-loading.component';

describe('MgrLoadingComponent', () => {
  let component: MgrLoadingComponent;
  let fixture: ComponentFixture<MgrLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
