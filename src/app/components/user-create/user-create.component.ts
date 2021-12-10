import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

    user!: Users;

    checkoutForm = this.formBuilder.group({
        firstname: '',
        lastname: ''
    });

    constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {

        this.user = this.checkoutForm.value;

         // Process checkout data here
         this.usersService.createUser(this.user)
         .subscribe(
             data => {
                 this.user = data;
                 console.log(data);
             },
             error => {
                 console.log(error);
             }
         );

     this.checkoutForm.reset();
    }

}
