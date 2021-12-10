import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HeaderComponent } from './general/header/header.component';
import { UserFindComponent } from './components/user-find/user-find.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HeaderComponent,
    UserFindComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
