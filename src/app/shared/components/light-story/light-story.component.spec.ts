import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightStoryComponent } from './light-story.component';

describe('LightStoryComponent', () => {
  let component: LightStoryComponent;
  let fixture: ComponentFixture<LightStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
