import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnpostsComponent } from './ownposts.component';

describe('OwnpostsComponent', () => {
  let component: OwnpostsComponent;
  let fixture: ComponentFixture<OwnpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
