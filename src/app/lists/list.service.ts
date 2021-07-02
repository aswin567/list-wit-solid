import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  sortList(key: 'price' | 'brand', listArray: Array<Item>, isDesending: boolean): Array<Item> {

    const sortedList = listArray.sort((firstItem, secondItem) => {
      let firstKeyValue = firstItem[key];
      let secondKeyValue = secondItem[key];

      firstKeyValue = this.onCheckCompareValue(firstKeyValue);
      secondKeyValue = this.onCheckCompareValue(secondKeyValue);
      if (firstKeyValue < secondKeyValue) {
        return isDesending?1:-1;
      }
      if (firstKeyValue > secondKeyValue) {
        return isDesending?-1:1;
      }
      return 0;
    });

    return sortedList;
  }

  filterList(key: 'price', listArray: Array<Item>, thresholdValue: number){
    const filterdArray: Array<Item> = []
    listArray.forEach((item:Item, index: number)=>{
      if(item[key] > thresholdValue){
        filterdArray.push(item)
      }
    });

    return filterdArray;
  }

  private onCheckCompareValue(value: string | number) {
    if (typeof value === 'string') {
      return value.toLowerCase();
    }

    return value;

  }
}
