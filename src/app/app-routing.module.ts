import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserFindComponent } from './components/user-find/user-find.component';

const routes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: 'user', component: UserFindComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
