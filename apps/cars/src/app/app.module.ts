import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';

import { CarModule } from '@nx-production/car-module';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), HttpClientModule, CarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
