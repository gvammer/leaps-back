import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../views/main/users/users.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UniqueIdModal } from '..';



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


    constructor(@Inject(MAT_DIALOG_DATA) public data, private _usersService: UsersService, private _dialogRef: MatDialogRef<AddUserModal>, private _dialog: MatDialog) { }

    ngOnInit() {
        this._formBuilder();
        this.getRoles();
        this._getOrganization();
        this._setPutchValue();
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

    private _setPutchValue() {
        if (this.data && this.data.editable) {

            this.usersGroup.patchValue({
                firstName: this.data.data.firstName,
                lastName: this.data.data.lastName,
                // title:this.data.data.title,
                roles: this.data.data.role._id,
                organization: this.data.data.organization._id,
                department: this.data.data.department,

            })
        }
    }

    private getRoles() {
        this._usersService.getRoles()
            .subscribe((data) => {
                this.rolesInfo = data;
                // console.log(data);

            })
    }

    private _getOrganization() {
        this._usersService.getOrganization()
            .subscribe((data: any) => {
                this.organizationInfo = data;
                //  console.log(this.organizationInfo);

            })
    }


    public postUsers() {
        if (this.data && this.data.editable) {
            this._usersService.updateUser(this.data.data._id, {
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
                this._dialogRef.close('update');

            })
        }
        else {
            this._usersService.postUsers({
                firstName: this.usersGroup.value.firstName,
                lastName: this.usersGroup.value.lastName,
                title: this.usersGroup.value.title,
                name: this.usersGroup.value.name,
                password: this.usersGroup.value.password,
                role: this.usersGroup.value.roles,
                organization: this.usersGroup.value.organization,
                department: this.usersGroup.value.department,
            }).subscribe((data: any) => {
                console.log(data);
                this._dialogRef.close('login');
                const _dialogRef = this._dialog.open(UniqueIdModal, {
                    width: "444px",
                    height: "350px",
                    data: {
                        data: data.uniqueID,
                    }
                })

            })
        }
    }


}