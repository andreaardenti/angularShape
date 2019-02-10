import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CerchioComponent } from './cerchio/cerchio.component';
import { TriangoloComponent } from './triangolo/triangolo.component';
import { ParallelogrammaComponent } from './parallelogramma/parallelogramma.component';

@NgModule({
  declarations: [
    AppComponent,
    CerchioComponent,
    TriangoloComponent,
    ParallelogrammaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
