import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: "app-save",
    templateUrl: "save.modals.html",
    styleUrls: ["save.modals.scss"]
})

export class SaveModals implements OnInit {

    constructor(private _dialogRef: MatDialogRef<SaveModals>) { }

    ngOnInit() { }

    public closeDialog(): void {
        this._dialogRef.close();
    }

    public saveItem(): void {
        this._dialogRef.close('save');
    }

}