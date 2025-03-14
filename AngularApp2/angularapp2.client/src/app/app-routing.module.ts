import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TeatpageComponent } from './teatpage/teatpage.component';
import { MoreComponent } from './more/more.component';


const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "more/:id", component: MoreComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
