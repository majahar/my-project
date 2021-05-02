import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const servicesoRoutes: Routes = [
  {path : 'services',component :ServicesComponent},

 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(servicesoRoutes)
  ],
  exports: [RouterModule]
})
export class ServicesModule { 
  constructor(){
    console.log('Servoce module calling')
  }
}
