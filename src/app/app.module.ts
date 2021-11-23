import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
// import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CategoryComponent } from './category/category.component';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CategoryModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
