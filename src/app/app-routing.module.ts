import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './general/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
    {path : 'header', component : HeaderComponent },
    {path : 'users', component : UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
