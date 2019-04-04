import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Fields } from '../../models/models';

@Component({
    selector: "app-message",
    templateUrl: "message.modals.html",
    styleUrls: ["message.modals.scss"]
})

export class MessageModals implements OnInit {
    public fildItem: Fields;
    constructor(@Inject(MAT_DIALOG_DATA) private _data, private _dialogRef: MatDialogRef<MessageModals>) {
        this.fildItem = _data;
    }

    ngOnInit() {
        console.log(this.fildItem);

    }

    public closeDialog(): void {
        this._dialogRef.close();
    }

}