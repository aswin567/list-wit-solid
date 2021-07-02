import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Item } from './item';
import { ListSorter } from './list-sorter/list-sorter';
import { ListService } from './list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  lists: Array<Item> = [];
  masterList: Array<Item> = [];
  maxPrice!: number;
  minPrice!: number;

  constructor(private appService: AppService, private listService: ListService) {
    this.getListData();
  }

  getListData() {
    this.appService.getList().subscribe((itemList: Array<Item>) => {
      this.masterList = this.listService.sortList('price', itemList, false);
      this.lists = JSON.parse(JSON.stringify(this.masterList));
      this.minPrice = this.masterList.length>0 ?this.masterList[0].price: 0;
      this.maxPrice = this.masterList.length>0 ?this.masterList[this.masterList.length - 1].price: 0;
    },
      (error) => { throw error });
  }

  sortList(sortingConfig: ListSorter) {
    const copyList = this.lists;
    this.lists = [];
    setTimeout(() => {
      this.lists = this.listService.sortList(sortingConfig.key, copyList, sortingConfig.trend === 'down' ? true : false)
    }, 0)

  }

  onFilterList(updatedValue: number) {

    this.lists = [];
    setTimeout(() => {
      this.lists = this.listService.filterList('price', this.masterList, updatedValue)
    }, 0);

  }
}
