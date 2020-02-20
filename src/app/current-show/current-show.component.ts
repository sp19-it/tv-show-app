import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: ICurrentShow
  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getCurrentShow("breaking")
    .subscribe(data => this.current = data)
  }
}
