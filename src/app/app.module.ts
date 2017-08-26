import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home',component: HomeComponent},
      {path: 'product',component:ProductComponent},
      {path: '',redirectTo: '/home',pathMatch: 'full'}
      ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
