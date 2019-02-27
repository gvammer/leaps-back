import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusesService } from '../../views/main/statuses/statuses.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "add-statuses",
    templateUrl: "add-statuses.modals.html",
    styleUrls: ["add-statuses.modals.scss"]
})

export class AddStatusesModals implements OnInit {

    public statusesGroup: FormGroup;
    public statusData: any;
    public rolesData: any;


    constructor(@Inject(MAT_DIALOG_DATA) private data, private _statusesService: StatusesService, private _dialogRef: MatDialogRef<AddStatusesModals>) {
        this.statusData = this.data.data;


    }

    ngOnInit() {
        this._formBuilder();
        this._getUserRoles();


    }


    private _formBuilder() {
        this.statusesGroup = new FormBuilder().group({
            name: ["", Validators.required],
            description: [""],
            statuses: [""],
        })
    }

    public postAdminStatuses() {
        this._statusesService.postAdminStatuses({
            name: this.statusesGroup.value.name,
            description: this.statusesGroup.value.description,
            allowRoles: [],
            canGoTo: []
        }).subscribe(data => {
            this._dialogRef.close();
            console.log(data);

        })
    }

    private _getUserRoles() {
        this._statusesService.getUserRoles()
            .subscribe((data: any) => {
                this.rolesData = data;
                console.log(this.rolesData, "roles");

            })
    }

}