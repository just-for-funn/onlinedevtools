import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { EnvconverterComponent } from './envconverter/envconverter.component';
import { EnvelementComponent } from './envelement/envelement.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EnvconverterComponent,
    EnvelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
