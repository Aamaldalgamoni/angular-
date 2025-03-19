import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { T1Component } from './t1/t1.component';
import { GetcategoryComponent } from './getcategory/getcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [{ path: "ttt", component: T1Component },
  { path: "getcategory", component: GetcategoryComponent },
  { path: "editcategory/:id", component: EditcategoryComponent },
  { path: "gerproduct", component: ShowproductComponent },
{ path: "editproduct/:id", component: EditcategoryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
