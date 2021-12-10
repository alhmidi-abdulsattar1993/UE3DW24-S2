import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user-delete',
    templateUrl: './user-delete.component.html',
    styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

    checkoutForm = this.formBuilder.group({
        id: ''
    });

    constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        // Process checkout data here
        this.usersService.deleteUser(Number(this.checkoutForm.get('id')?.value))
            .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                }
            );

        this.checkoutForm.reset();
    }

}