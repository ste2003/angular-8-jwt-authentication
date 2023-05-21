import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificaComponent } from './notifica/notifica.component';
import { ListNovedadComponent } from './list-novedad/list-novedad.component';
import { DetailsNovedadComponent } from './details-novedad/details-novedad.component';
import { AddNovedadComponent } from './add-novedad/add-novedad.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FiltroEscritosPipe } from './filtro-escritos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    NotificaComponent,
    ListNovedadComponent,
    DetailsNovedadComponent,
    AddNovedadComponent,
    FiltroEscritosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
