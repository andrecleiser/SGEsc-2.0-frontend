import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import {
    BrowserAnimationsModule, NoopAnimationsModule
} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho/cabecalho.component';
import { GeralModule } from './module/geral.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,

    GeralModule.forRoot(),

    AppRoutingModule,

    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    CabecalhoComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],

  bootstrap: [AppComponent]
})
export class AppModule { }
