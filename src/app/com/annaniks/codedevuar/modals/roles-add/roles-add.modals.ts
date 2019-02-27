import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from "@angular/forms"
import { RolesService } from '../../views/main/roles/roles.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: "add-roles",
    templateUrl: "add-roles.modals.html",
    styleUrls: ["add-roles.modals.scss"]
})

export class AddRolesModals implements OnInit {

    public rolseGroup: FormGroup;
    public permissionsData: any[];
    public itemsArray = [];
    constructor(private _rolesService: RolesService, private _dialogRef: MatDialogRef<AddRolesModals>) { }

    ngOnInit() {
        this._formBuilder();
        this._usersPermissions();
    }

    private _formBuilder(): void {
        this.rolseGroup = new FormBuilder().group({
            name: ["", Validators.required],
            title: ["", Validators.required],
            // items: new FormArray([
            //     new FormControl('', Validators.required)
            // ])
        })
    }


    private _usersPermissions() {
        this._rolesService.getUserPermissions()
            .subscribe((data: any) => {
                this.permissionsData = data;
                this.rolseGroup.addControl('permissions', this._buildPermisions())
            })
    }

    public postRoles() {
        let permissionIds: string[] = [];
        let items: object[] = [];
        this.rolseGroup.get('permissions')['controls'].forEach((element, index) => {
            if (element.value) {
                permissionIds.push(this.permissionsData[index]._id)
            }
        })
        this.rolseGroup.get('items')['controls'].forEach((element, index) => {
            if (element) {
                items.push({ title: element.value })
            }
        })

        this._rolesService.postRoles({
            name: this.rolseGroup.value.name,
            title: this.rolseGroup.value.title,
            // items: items,
            //permissions: permissionIds
        }).subscribe((data) => {
            this._dialogRef.close();
            window.location.reload();
        })
    }

    public addNewItem(): void {
        this.rolseGroup.get('items')['controls'].push(new FormControl('', Validators.required))
    }

    private _buildPermisions() {
        let permissionsArray = [];
        this.permissionsData.forEach((element) => {
            permissionsArray.push(new FormBuilder().control(false, []));
        })

        return new FormBuilder().array(permissionsArray);
    }


    public addRoles() {
        
        this._rolesService.postRoles({
            name: this.rolseGroup.value.name,
            title: this.rolseGroup.value.title,
        }).subscribe((data) => {
            console.log(data);
            this._dialogRef.close();
            window.location.reload();
        })
    }
}