import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListSorter } from './list-sorter';

@Component({
  selector: 'app-list-sorter',
  templateUrl: './list-sorter.component.html',
  styleUrls: ['./list-sorter.component.scss']
})
export class ListSorterComponent implements OnInit {

  @Output() onSort: EventEmitter<ListSorter> = new EventEmitter<ListSorter>()

  sortByPrice: ListSorter = { key: 'price', isActive: false };
  sortByBrand: ListSorter = { key: 'brand', isActive: false };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSortByPrice() {
    this.sortByBrand.isActive = false;
    if (this.sortByPrice.isActive) {
      this.sortByPrice.trend = this.trendSeter(this.sortByPrice.trend as string);
    } else {

      this.sortByPrice.isActive = true;
      this.sortByPrice.trend = 'up';
    }
    this.onSort.emit(this.sortByPrice);
  }

  onSortByBrand() {

    this.sortByPrice.isActive = false;
    if (this.sortByBrand.isActive) {
      this.sortByBrand.trend = this.trendSeter(this.sortByBrand.trend as string);
    } else {

      this.sortByBrand.isActive = true;
      this.sortByBrand.trend = 'up';
    }
    this.onSort.emit(this.sortByBrand);
  }

  private trendSeter(trend: string): string {
    if (trend === 'up')
      return 'down'

    return 'up'
  }
}
