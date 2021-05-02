import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'

import { LoginComponent} from './login/login.component'
import { ProductsModule } from './product/products.module';
import { ServicesModule } from './services/services.module';

const routes: Routes = [
                       {path : '',redirectTo:'home',pathMatch:'full'},
                       {path : 'home',component :HomeComponent},
                       {path : 'aboutus',component :AboutusComponent},
                       {path : 'login',component :LoginComponent},
                       {path : 'contactus',component :ContactusComponent},
                       {path : '**',component :PageNotFoundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductsModule,ServicesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
