import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CecbankComponent } from './cecbank/cecbank.component';

const routes: Routes = [
  { path:'cec-bank', component: CecbankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
