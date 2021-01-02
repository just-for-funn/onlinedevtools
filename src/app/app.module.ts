import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { EnvconverterComponent } from './envconverter/envconverter.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EnvconverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
