import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DuckService } from './duck.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DuckComponent } from './duck/duck.component';

@NgModule({
  declarations: [
    AppComponent,
    DuckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DuckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
