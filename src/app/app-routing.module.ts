import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './dispositivo/form.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';

const routes: Routes = [
  {path: '', redirectTo: '/dispositivo', pathMatch: 'full'},
  {path: 'dispositivo', component: DispositivoComponent},
  {path: 'dispositivo/form', component: FormComponent},
  {path: 'dispositivo/form/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
