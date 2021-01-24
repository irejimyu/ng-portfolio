import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgContactComponent } from './pg-contact.component';

describe('PgContactComponent', () => {
  let component: PgContactComponent;
  let fixture: ComponentFixture<PgContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
