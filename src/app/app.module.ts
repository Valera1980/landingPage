import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOneComponent } from './form-one/form-one.component';
import { LandComponent } from './land/land.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
