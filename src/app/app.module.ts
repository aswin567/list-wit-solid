import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const MaterialModules = [MatProgressSpinnerModule, MatButtonModule, MatIconModule, MatToolbarModule, ScrollingModule, MatCardModule, MatChipsModule, MatSliderModule];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ItemComponent } from './lists/item/item.component';
import { ListFilterComponent } from './lists/list-filter/list-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSorterComponent } from './lists/list-sorter/list-sorter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ItemComponent,
    ListFilterComponent,
    ListSorterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
