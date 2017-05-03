import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { ProductItemComponent } from './component.Product-item';
import { ProductDetailsComponent } from './component.Product-details';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, ProductItemComponent, ProductDetailsComponent, SearchPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}