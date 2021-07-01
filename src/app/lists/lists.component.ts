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
export class ListsComponent{
  lists: Array<Item> = [];
  maxPrice!: number;
  minPrice!: number;

  constructor(private appService: AppService, private listService: ListService) {
    this.getListData();
  }

  getListData(){
    this.appService.getList().subscribe((itemList: Array<Item>) => {
     this.lists = this.listService.sortList('price', itemList, true);
     this.maxPrice = this.lists [0].price;
     this.minPrice = this.lists [this.lists.length-1].price;
    },
      (error) => { throw error });
  }

  sortList(sortingConfig: ListSorter){
    const localList = this.lists;
    this.lists = [];
    setTimeout(()=>{
      this.lists = this.listService.sortList(sortingConfig.key, localList, sortingConfig.trend === 'down'? true: false )
    }, 0)
    
  }

}
