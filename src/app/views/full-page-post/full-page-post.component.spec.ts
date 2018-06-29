import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPagePostComponent } from './full-page-post.component';

describe('FullPagePostComponent', () => {
  let component: FullPagePostComponent;
  let fixture: ComponentFixture<FullPagePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPagePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
