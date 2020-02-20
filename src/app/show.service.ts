import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICurrentShowData } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ICurrentShow } from './icurrent-show';
import { IShowService } from './ishow-service';

@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentShow(name: string | number): Observable<ICurrentShow> {
    return this.httpClient.get<ICurrentShowData>(
    `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`
    ).pipe(map(data => this.transformToICurrentShow(data)))
  }

  transformToICurrentShow(data: ICurrentShowData): ICurrentShow {
    return {
      name: data.name,
      genres: data.genres,
      rating: data.rating.average,
      image: data.image.medium,
      summary: data.summary
    }
  }
}
