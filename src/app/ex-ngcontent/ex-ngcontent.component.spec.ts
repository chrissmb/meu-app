import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgcontentComponent } from './ex-ngcontent.component';

describe('ExNgcontentComponent', () => {
  let component: ExNgcontentComponent;
  let fixture: ComponentFixture<ExNgcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExNgcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
