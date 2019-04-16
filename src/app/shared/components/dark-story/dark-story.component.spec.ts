import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkStoryComponent } from './dark-story.component';

describe('DarkStoryComponent', () => {
  let component: DarkStoryComponent;
  let fixture: ComponentFixture<DarkStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
