import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T1Component } from './t1/t1.component';
import { GetcategoryComponent } from './getcategory/getcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    T1Component,
    GetcategoryComponent,
    EditcategoryComponent,
    ShowproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
