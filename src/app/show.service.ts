import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICurrentShowData, ICurrentShowDataList } from './icurrent-show-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ICurrentShow, ICurrentShowList } from './icurrent-show';
import { IShowService } from './ishow-service';

@Injectable({
  providedIn: 'root'
})
export class ShowService implements IShowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentShow(name: string | number): Observable<ICurrentShowList> {
    return this.httpClient.get<ICurrentShowDataList>(
    `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}`
    ).pipe(map(data => this.transformToICurrentShow(data)))
  }

  transformToICurrentShow(data: ICurrentShowDataList): ICurrentShowList {
    console.log(data)
  
    let showName: string;
    let showGenres: string[] | string;
    let showRating: number | string;
    let showImage: string;
    let showWebsite: string;
    let showSummary: string;

    let ICurrentShowList: ICurrentShow[] = new Array(data.length)

    for (let i=0; i < data.length; i++) {

      if (data[i].show.name) {
        showName = data[i].show.name
      } else {
        showName = "Not Available"
      }

      if (data[i].show.genres.length > 0) {
        showGenres = data[i].show.genres 
      } else {
        showGenres = "Unknown Genres"
      }

      if (data[i].show.image? data[i].show.image.medium : null) {
        showImage = data[i].show.image.medium
      } else {
        showImage = ""
      }

      if (data[i].show.rating.average) {
        showRating = data[i].show.rating.average
      } else {
        showRating = "No Ratings Yet"
      }

      if (data[i].show.officialSite) {
        showWebsite = data[i].show.officialSite
      } else {
        showWebsite = "Website Not Available"
      }

      if (data[i].show.summary) {
        showSummary = data[i].show.summary
      } else {
        showSummary = "Not Available"
      }

      ICurrentShowList[i] = {
        name: showName,
        genres: showGenres,
        rating: showRating,
        image: showImage,
        website: showWebsite,
        summary: showSummary
      }
    }
    return ICurrentShowList
  }
}
