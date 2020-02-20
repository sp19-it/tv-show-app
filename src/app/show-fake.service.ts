import { Injectable } from '@angular/core';
import { ICurrentShow } from './icurrent-show';
import { IShowService } from './ishow-service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowFakeService implements IShowService {
  fakeShow: ICurrentShow = {
    name: "monster",
    genres: ["thriller"],
    rating: 6,
    image: "",
    summary: "very scary"
  } 
  constructor() { }

  getCurrentShow(name: string | number): Observable<ICurrentShow> {
    return of(this.fakeShow)
  }
}
