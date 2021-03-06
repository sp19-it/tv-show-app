import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { SearchShowComponent } from './search-show/search-show.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentShowComponent,
        SearchShowComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tv-show-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tv-show-app');
  });
});
