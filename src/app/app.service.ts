import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './lists/item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getList():Observable<Array<Item>>{

    return this.httpClient.get<Array<Item>>('assets/data/convertcsv.json');
  }
}
