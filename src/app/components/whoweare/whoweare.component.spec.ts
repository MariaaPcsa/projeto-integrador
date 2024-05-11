import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoweareComponent } from './whoweare.component';

describe('WhoweareComponent', () => {
  let component: WhoweareComponent;
  let fixture: ComponentFixture<WhoweareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoweareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
