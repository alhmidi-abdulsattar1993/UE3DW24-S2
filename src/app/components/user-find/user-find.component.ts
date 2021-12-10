import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user-find',
    templateUrl: './user-find.component.html',
    styleUrls: ['./user-find.component.scss']
})
export class UserFindComponent implements OnInit {

    user!: Users;
    result = false;
    alert = false;

    checkoutForm = this.formBuilder.group({
        id: ''
    });

    constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
         // Process checkout data here
         this.usersService.getOne(this.checkoutForm.get('id')?.value)
         .subscribe(
             data => {
                 this.user = data;
                 console.log(data);
                 if(this.user !== null){
                     this.result = true;
                     this.alert = false;
                 } else {
                    this.result = false;
                    this.alert = true;
                 }
             },
             error => {
                 console.log(error);
             }
         );

     this.checkoutForm.reset();
    }

}