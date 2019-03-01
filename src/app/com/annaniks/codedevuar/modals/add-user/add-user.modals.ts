import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../views/main/users/users.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
    selector: "app-user",
    templateUrl: "add-user.modals.html",
    styleUrls: ["add-user.modals.scss"]
})

export class AddUserModal implements OnInit {

    public usersGroup: FormGroup;
    public rolesInfo: any;
    public organizationInfo: any;
    public department: any;

    public selectedRole: string;


    constructor(private _usersService: UsersService, private _dialogRef: MatDialogRef<AddUserModal>) { }

    ngOnInit() {
        this._formBuilder();
        this.getRoles();
        this._getOrganization();
    }


    private _formBuilder() {
        this.usersGroup = new FormBuilder().group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            title: ["", Validators.required],
            name: ["", Validators.required],
            password: ["", Validators.required],
            roles: [],
            organization: [],
            department: [],
        })
    }

    private getRoles() {
        this._usersService.getRoles()
            .subscribe((data) => {
                this.rolesInfo = data;
                console.log(data);

            })
    }

    private _getOrganization() {
        this._usersService.getOrganization()
            .subscribe((data: any) => {
                this.organizationInfo = data;
                console.log(this.organizationInfo);

            })
    }


    public postUsers() {
        console.log(this.usersGroup.value);

        this._usersService.postUsers({
            firstName: this.usersGroup.value.firstName,
            lastName: this.usersGroup.value.lastName,
            title: this.usersGroup.value.title,
            name: this.usersGroup.value.name,
            password: this.usersGroup.value.password,
            role: this.usersGroup.value.roles,
            organization: this.usersGroup.value.organization,
            department: this.usersGroup.value.department,
        }).subscribe((data) => {
            console.log(data);
            this._dialogRef.close('login');

        })
    }
}