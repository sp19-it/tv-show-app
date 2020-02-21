import { Injectable } from '@angular/core';
import { ICurrentShow, ICurrentShowList } from './icurrent-show';
import { IShowService } from './ishow-service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowFakeService implements IShowService {
  fakeShow: ICurrentShowList = [
    {
      name: "monster",
      genres: ["thriller"],
      rating: 6,
      image: "",
      summary: "very scary"
    }
  ]
  constructor() { }

  getCurrentShow(name: string | number): Observable<ICurrentShowList> {
    return of(this.fakeShow)
  }
}
