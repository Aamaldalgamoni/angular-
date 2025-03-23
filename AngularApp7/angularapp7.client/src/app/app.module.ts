import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewvoucherComponent } from './viewvoucher/viewvoucher.component';
import { DetailsvoucherComponent } from './detailsvoucher/detailsvoucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';
import { CreatvoucherComponent } from './creatvoucher/creatvoucher.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewvoucherComponent,
    DetailsvoucherComponent,
    EditvoucherComponent,
    CreatvoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
