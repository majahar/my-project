import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TelevisionComponent } from './television/television.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';

const proRoutes: Routes = [
  {path : 'product',children :[
  {path : '',component :ProductComponent}, 
  {path : 'laptop',component :LaptopComponent},
  {path : 'mobile',component :MobileComponent},
  {path : 'television',component :TelevisionComponent},
  {path : 'washingmachine',component :WashingmachineComponent}
 ]}
];



@NgModule({
  declarations: [  
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingmachineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
