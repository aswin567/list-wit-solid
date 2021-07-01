import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
