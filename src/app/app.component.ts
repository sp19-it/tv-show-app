import { Component } from '@angular/core';
import { ShowService } from './show.service';
import { ICurrentShow, ICurrentShowList } from './icurrent-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  currentShow: ICurrentShowList
  constructor(private showService: ShowService) { }

  doSearch(searchValue) {
    this.showService.getCurrentShow(searchValue)
    .subscribe(data => this.currentShow = data)
  }
}
