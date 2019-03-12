import { Component, OnInit, Inject } from "@angular/core";
import { OrganizationService } from '../../views/main/organization/organization.service';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: "add-organization",
    templateUrl: "add-organization.modals.html",
    styleUrls: ["add-organization.modals.scss"]
})

export class AddOrganization implements OnInit {
    public organizationGroup: FormGroup;
    private _editable: boolean = false;
    constructor(@Inject(MAT_DIALOG_DATA) private _data: any, private _organizationService: OrganizationService, private _dialogRef: MatDialogRef<AddOrganization>) { }

    ngOnInit() {
        this._formBuilder();
        this._setOrganizationInfo();
    }

    private _formBuilder() {
        this.organizationGroup = new FormBuilder().group({
            name: ["", Validators.required],
            title: ["", Validators.required],
            items: new FormArray([])
        })
    }

    public postOrganization() {
        let items: object[] = [];
        this.organizationGroup.get('items')['controls'].forEach((element, index) => {
            if (element && element.value) {
                items.push({ name: element.value })
            }
        })
        if (!this._editable) {
            this._organizationService.postOrganization({
                name: this.organizationGroup.value.name,
                title: this.organizationGroup.value.title,
                departments: items,

            }).subscribe((data) => {
                this._dialogRef.close();
                window.location.reload();
            })
        }
        else {
            this._organizationService.putOrganization(this._data.item._id, {
                name: this.organizationGroup.value.name,
                title: this.organizationGroup.value.title,
                departments: items,
            })
                .subscribe((data) => {
                    this._dialogRef.close();
                    window.location.reload();
                })
        }
    }

    private _setOrganizationInfo(): void {
        if (this._data && this._data.editable) {
            this._editable = true;
            this.organizationGroup.patchValue({
                name: this._data.item.name,
                title: this._data.item.title
            })
            for (let i of this._data.item.departments) {
                this.organizationGroup.get('items')['controls'].push(new FormControl(i.name, Validators.required))
            }
            if (this._data.item.departments.length == 0) {
                this.organizationGroup.get('items')['controls'].push(new FormControl('', Validators.required))
            }
        }
        else {
            this.organizationGroup.get('items')['controls'].push(new FormControl('', Validators.required));
        }
    }

    public removeDepartment(index: number) {
        this.organizationGroup.get('items')['controls'].splice(index, 1);
        if (this.organizationGroup.get('items')['controls'].length == 0) {
            this.organizationGroup.get('items')['controls'].push(new FormControl('', Validators.required))
        }

    }

    public addNewItem(): void {
        this.organizationGroup.get('items')['controls'].push(new FormControl('', Validators.required))
    }
}