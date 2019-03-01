import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms"
import { StatusesService } from '../../views/main/statuses/statuses.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin, } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: "update-statuses",
    templateUrl: "update-statuses.modals.html",
    styleUrls: ["update-statuses.modals.scss"]
})

export class UpdateStatusesModals implements OnInit {

    public statusesGroup: FormGroup;
    public statusData: any;
    public rolesData: any;


    constructor(@Inject(MAT_DIALOG_DATA) private _data: any, private _statusesService: StatusesService, private _dialogRef: MatDialogRef<UpdateStatusesModals>) { }

    ngOnInit() {
        this._formBuilder();
        this._setPatchValue();
        this._getJoin();
    }

    private _formBuilder() {
        this.statusesGroup = new FormBuilder().group({
            name: ["", Validators.required],
            description: [""],
        })
    }

    private _setPatchValue(): void {
        this.statusesGroup.patchValue({
            name: this._data.data.name,
            description: this._data.data.description,
        });
        console.log(this._data);

    }

    public updateStutuses() {
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
        this._statusesService.updateStutuses(this._data.data._id, {
            name: this.statusesGroup.value.name,
            description: this.statusesGroup.value.description,
            allowRoles: selectedRoles,
            canGoTo: selectedStatuses,
        }).subscribe((data) => {
            this._dialogRef.close('update');
        })
    }

    private _getUserRoles() {
        return this._statusesService.getUserRoles()
            .pipe(map((data: any) => {
                this.rolesData = data;
            }))
    }

    private _getStatuses() {
        return this._statusesService.getStatuses()
            .pipe(map((data) => {
                this.statusData = data;
            }))
    }

    private _getJoin() {
        forkJoin(this._getUserRoles(), this._getStatuses())
            .subscribe(data => {
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
            let isEqually: boolean = false;
            for (var j = 0; j < this._data.data.allowRoles.length; j++) {
                if (this.rolesData[i]._id == this._data.data.allowRoles[j]._id) {
                    isEqually = true;
                }
            }
            arr.push(new FormBuilder().control(isEqually));
        }
        return new FormBuilder().array(arr);
    }

    private _buildStatuses() {
        let statusesArray = [];
        for (var i = 0; i < this.statusData.length; i++) {
            let isequally = false;
            for (var j = 0; j < this._data.data.canGoTo.length; j++) {
                if (this.statusData[i]._id == this._data.data.canGoTo[j]._id) {
                    isequally = true;
                }
            }
            statusesArray.push(new FormBuilder().control(isequally))
        }
        return new FormBuilder().array(statusesArray);
    }

}