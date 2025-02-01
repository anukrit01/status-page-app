import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicStatusPageComponent } from './public-status-page.component';

describe('PublicStatusPageComponent', () => {
  let component: PublicStatusPageComponent;
  let fixture: ComponentFixture<PublicStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicStatusPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
