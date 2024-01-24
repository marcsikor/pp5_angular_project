import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimItemizationComponent } from './claim-itemization.component';

describe('ClaimItemizationComponent', () => {
  let component: ClaimItemizationComponent;
  let fixture: ComponentFixture<ClaimItemizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimItemizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimItemizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
