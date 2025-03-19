import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetproductComponent } from './getproduct/getproduct.component';


import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
  
    GetproductComponent,

    AddcategoryComponent,
      AddproductComponent,
     
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
