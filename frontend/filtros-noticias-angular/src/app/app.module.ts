import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FiltrosNoticiasComponent } from './filtros-noticias/filtros-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosNoticiasComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
