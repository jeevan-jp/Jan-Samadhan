import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourComplaintsComponent } from './your-complaints.component';

describe('YourComplaintsComponent', () => {
  let component: YourComplaintsComponent;
  let fixture: ComponentFixture<YourComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
