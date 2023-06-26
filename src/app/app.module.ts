import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPassComponent } from './pages/login-pass/login-pass.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { UserContainerComponent } from './pages/user-container/user-container.component';
import { PagosComponent } from './pages/pagos/pagos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPassComponent,
    LogoComponent,
    UserContainerComponent,
    PagosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
