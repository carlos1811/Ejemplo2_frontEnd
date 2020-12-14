import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { FormComponent } from './dispositivo/form.component';
import { DispositivoService } from './dispositivo/dispositivo.service';
import { FormsModule } from '@angular/forms'
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/dispositivo', pathMatch: 'full'},
  {path: 'dispositivo', component: DispositivoComponent},
  {path: 'dispositivo/form', component: FormComponent},
  {path: 'dispositivo/form/:id', component: FormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DispositivoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DispositivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
