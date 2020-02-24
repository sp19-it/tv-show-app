import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { ShowService } from '../show.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl("", Validators.minLength(3))
  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(searchValue => {  
      if (!this.search.invalid && searchValue) {
        this.searchEvent.emit(searchValue)
      }
    })
  }

}
