import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-uniqueId",
    templateUrl: "uniqueId.modals.html",
    styleUrls: ["uniqueId.modals.scss"]
})

export class UniqueIdModal implements OnInit {

    public uniqueId: string;

    constructor(@Inject(MAT_DIALOG_DATA) private _data, private _dialogRef: MatDialogRef<UniqueIdModal>) {
        this.uniqueId = this._data.data;
        console.log(this.uniqueId);

    }

    ngOnInit() { }

    public closeModal() {
        this._dialogRef.close();
    }
}