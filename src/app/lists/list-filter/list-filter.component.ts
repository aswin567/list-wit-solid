import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {
  
  @Input()
  minLimit!: number;
  @Input()
  maxLimit!: number;

  @Output() onFilter: EventEmitter<number> = new EventEmitter<number>()
  minPriceLimit!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onFilterValueChange(change: MatSliderChange): void{
    this.onFilter.emit(change.value as number);
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
