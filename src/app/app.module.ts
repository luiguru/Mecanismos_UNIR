import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MotorComponent } from './motor/motor.component';
import {Routes, RouterModule} from "@angular/router";
import { Motor1Component } from './motor1/motor1.component';
import { Motor2Component } from './motor2/motor2.component';
import { CompraComponent } from './compra/compra.component';//se pone esto

//se pone esto
const appRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'motor', component: MotorComponent},
  {path:'motor1', component: Motor1Component},
  {path:'motor2', component: Motor2Component},
  {path:'compra', component: CompraComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MotorComponent,
    HomeComponent,
    Motor1Component,
    Motor2Component,
    CompraComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),//se pone esto
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
