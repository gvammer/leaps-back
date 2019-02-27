import { Component, OnInit } from "@angular/core";
import { OrganizationService } from '../../views/main/organization/organization.service';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms"
import { MatDialogRef } from '@angular/material/dialog';
import { Permission } from '../../views/main/permissions/permissions.models';


@Component({
    selector: "add-organization",
    templateUrl: "add-organization.modals.html",
    styleUrls: ["add-organization.modals.scss"]
})

export class AddOrganization implements OnInit {
    public permissionsData: Permission[] = [];
    public organizationGroup: FormGroup;

    constructor(private _organizationService: OrganizationService, private _dialogRef: MatDialogRef<AddOrganization>) { }

    ngOnInit() {
        this._formBuilder();
        this._usersPermissions();
    }

    private _formBuilder() {
        this.organizationGroup = new FormBuilder().group({
            name: ["", Validators.required],
            title: ["", Validators.required],
            items: new FormArray([
                new FormControl('', Validators.required)
            ])
        })
    }

    private _usersPermissions() {
        this._organizationService.getusersOrganization()
            .subscribe((data: any) => {
                this.permissionsData = data;
                this.organizationGroup.addControl('permissions', this._buildPermisions())
            })
    }

    public postOrganization() {
        let permissionIds: string[] = [];
        let items: object[] = [];
        this.organizationGroup.get('items')['controls'].forEach((element, index) => {
            if (element) {
                items.push({ name: element.value })
            }
        })

        this._organizationService.postOrganization({
            name: this.organizationGroup.value.name,
            title: this.organizationGroup.value.title,
            departments: items,
           
        }).subscribe((data) => {
            this._dialogRef.close();
            window.location.reload();
        })
    }

    public addNewItem(): void {
        this.organizationGroup.get('items')['controls'].push(new FormControl('', Validators.required))
    }

    private _buildPermisions() {
        let permissionsArray = [];
        this.permissionsData.forEach((element) => {
            permissionsArray.push(new FormBuilder().control(false, []));
        })

        return new FormBuilder().array(permissionsArray);
    }



}