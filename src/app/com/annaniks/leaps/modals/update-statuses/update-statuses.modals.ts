import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms"
import { StatusesService } from '../../views/main/statuses/statuses.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { forkJoin, } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaveModals } from '../save/save.modals';

@Component({
    selector: "update-statuses",
    templateUrl: "update-statuses.modals.html",
    styleUrls: ["update-statuses.modals.scss"]
})

export class UpdateStatusesModals implements OnInit {

    public statusesGroup: FormGroup;
    public statusData: any;
    public statusId: string;
    public rolesData: { id: string, permissions: string[] }[] = [];
    public roles = [];
    public permissions:
        { label: string, value: string }[] = [
            { label: "Write", value: 'status:write' },
            { label: "Read", value: 'status:read' },
            { label: "Set", value: 'status:set' },
        ]


    constructor(@Inject(MAT_DIALOG_DATA) private _data: any, private _statusesService: StatusesService, private _dialogRef: MatDialogRef<UpdateStatusesModals>,private _dialog:MatDialog) { }

    ngOnInit() {
        this._formBuilder();
        this._setPatchValue();
        this._getJoin();
        this.rolesData = []
        for (let i = 0; i < this._data.data.allowRoles.length; i++) {
            const element = this._data.data.allowRoles[i];
            this.rolesData.push({ id: element.id._id, permissions: element.permissions })

        }
        //  this._data.data.allowRoles;
    }

    private _formBuilder() {
        this.statusesGroup = new FormBuilder().group({
            name: ["", Validators.required],
            description: [""],
            allowRoles: [""]
        })
    }

    private _setPatchValue(): void {
        this.statusesGroup.patchValue({
            name: this._data.data.name,
            description: this._data.data.description,
        });
        console.log(this._data,"vfvbfb");

    }
    public addNewRole() {
        this.rolesData.push({ id: "", permissions: [] })
    }
    public updateStutuses() {
        const dialogRef=this._dialog.open(SaveModals,{
            width:"444px",
            height:"400px",
        })
        dialogRef.afterClosed()
        .subscribe((data)=>{
            if(data=="save"){
                let rolecontrols = this.statusesGroup.get('roles')['controls'];
                let statuscontrols = this.statusesGroup.get('statuses')['controls'];
                let selectedRoles = [];
                let selectedStatuses = [];
                for (var i = 0; i < rolecontrols.length; i++) {
                    if (rolecontrols[i].value == true) {
                        selectedRoles.push({ id: this.rolesData[i].id, permisions: [] });
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
                    allowRoles: this.rolesData,
                    canComeFrom: selectedStatuses,
                }).subscribe((data) => {
                    this._dialogRef.close('update');
                })
            }
        })

     
    }

    private _getUserRoles() {
        return this._statusesService.getUserRoles()
            .pipe(map((data: any) => {
                // this.rolesData = data;
                this.roles = [];
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    this.roles.push({ value: item._id, label: item.name })
                }
            }))
    }

    private _getStatuses() {
        return this._statusesService.getStatuses()
            .pipe(map((data: any[]) => {
                this.statusData = data;


            }))
    }

    private _getJoin() {
        forkJoin(this._getUserRoles(), this._getStatuses())
            .subscribe(data => {
                this._setControls();

            });
        console.log(this.statusData, "statusData");

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
                if (this.rolesData[i].id == this._data.data.allowRoles[j]._id) {
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
            for (var j = 0; j < this._data.data.canComeFrom.length; j++) {
                if (this.statusData[i]._id == this._data.data.canComeFrom[j]._id) {
                    isequally = true;
                }
            }
            statusesArray.push(new FormBuilder().control(isequally))
        }
        return new FormBuilder().array(statusesArray);
    }

    public addNewItem(): void {
        this.statusesGroup.get('items')['controls'].push(new FormControl('', Validators.required))
    }


    public deleteAllRoles(index) {
        this.rolesData.splice(index,1);
   
        /*
        this._statusesService.deleteStatusRole(this.statusData[i]._id, roleId)
            .subscribe(data => {
                console.log(data);

            })
*/
    }

}