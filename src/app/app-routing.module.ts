import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Table1Component } from './table1/table1.component';
import { VbnComponent } from './vbn/vbn.component';

const routes: Routes = [
  {
    path:'home',component: HomeComponent,
   
  },
  {
    path:'vbn',component: VbnComponent,
  },
  {
    path:'table1',component: Table1Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
