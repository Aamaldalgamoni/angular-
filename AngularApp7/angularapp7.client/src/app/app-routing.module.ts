import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewvoucherComponent } from './viewvoucher/viewvoucher.component';
import { DetailsvoucherComponent } from './detailsvoucher/detailsvoucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';
import { CreatvoucherComponent } from './creatvoucher/creatvoucher.component';

const routes: Routes = [{ path: "vvoucher", component: ViewvoucherComponent },
  { path: "dvoucher/:id", component: DetailsvoucherComponent },
  { path: "editvoucher/:id", component: EditvoucherComponent },
  { path: "cccccc", component: CreatvoucherComponent }];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
