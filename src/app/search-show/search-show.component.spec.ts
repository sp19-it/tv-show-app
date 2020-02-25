import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShowComponent } from './search-show.component';
import { ShowService } from '../show.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchShowComponent', () => {
  let component: SearchShowComponent;
  let fixture: ComponentFixture<SearchShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShowComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ShowService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
