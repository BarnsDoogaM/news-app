import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadLinesComponent } from './top-head-lines.component';

describe('TopHeadLinesComponent', () => {
  let component: TopHeadLinesComponent;
  let fixture: ComponentFixture<TopHeadLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeadLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
