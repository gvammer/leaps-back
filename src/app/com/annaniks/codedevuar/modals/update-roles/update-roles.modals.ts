import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolesService } from '../../views/main/roles/roles.service';
@Component({
    selector: "update-roles",
    templateUrl: "update-roles.modals.html",
    styleUrls: ["update-roles.modals.scss"]
})

export class UpdateRolesModals implements OnInit {

    public rolseGroup: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: any, private _rolesService: RolesService,private _dialogRef:MatDialogRef<UpdateRolesModals>) { }

    ngOnInit() {
        this._formBuilder();
        this._setPatchValue();

    }


    private _formBuilder(): void {
        this.rolseGroup = new FormBuilder().group({
            name: ["", Validators.required],
            title: ["", Validators.required],
        });

    }

    private _setPatchValue(): void {
        console.log(this._data);

        this.rolseGroup.patchValue({
            name: this._data.data.name,
            title: this._data.data.title,
        })
    }

    public updateRoles() {
        this._rolesService.updateRoles(this._data.data._id, {
            name: this.rolseGroup.value.name,
            title: this.rolseGroup.value.title,
        }).subscribe((data) => {
            this._dialogRef.close('update');
            console.log(data);

        })
    }
}