import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetcategoryComponent } from './getcategory/getcategory.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';



const routes: Routes = [
  { path: "getcateg", component: GetcategoryComponent },
  { path: "getproduc/:id", component: GetproductComponent },
  { path: "addcat", component: AddcategoryComponent },
  { path: "addpro", component: AddproductComponent },
  { path: "getcat", component: GetcategoryComponent },
 

]

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
