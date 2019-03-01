import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
        })
    }

    public postAdminStatuses() {
        let rolecontrols = this.statusesGroup.get('roles')['controls'];
        let statuscontrols = this.statusesGroup.get('statuses')['controls'];
        let selectedRoles = [];
        let selectedStatuses = [];
        for (var i = 0; i < rolecontrols.length; i++) {
            if (rolecontrols[i].value == true) {
                selectedRoles.push(this.rolesData[i]._id);
            }
        }
        for (var i = 0; i < statuscontrols.length; i++) {
            if (statuscontrols[i].value == true) {
                selectedStatuses.push(this.statusData[i]._id);
            }
        }
        this._statusesService.postAdminStatuses({
            name: this.statusesGroup.value.name,
            description: this.statusesGroup.value.description,
            allowRoles: selectedRoles,
            canGoTo: selectedStatuses
        }).subscribe(data => {
            this._dialogRef.close();
            location.reload();
        })
    }

    private _getUserRoles() {
        this._statusesService.getUserRoles()
            .subscribe((data: any) => {
                this.rolesData = data;
                this._setControls();
            })
    }

    private _setControls(): void {
        this.statusesGroup.addControl('roles', this._buildRoles());
        this.statusesGroup.addControl('statuses', this._buildStatuses())
    }

    private _buildRoles(): FormArray {
        let arr = [];
        for (var i = 0; i < this.rolesData.length; i++) {
            arr.push(new FormBuilder().control(false))
        }
        return new FormBuilder().array(arr);
    }

    private _buildStatuses() {
        let statusesArray = [];
        for (var i = 0; i < this.statusData.length; i++) {
            statusesArray.push(new FormBuilder().control(false))
        }
        return new FormBuilder().array(statusesArray);
    }

}