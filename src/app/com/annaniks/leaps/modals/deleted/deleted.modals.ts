import { Component, OnInit } from "@angular/core";
import {MatDialogRef } from '@angular/material/dialog';



@Component({
    selector: "app-deleted",
    templateUrl: "deleted.modals.html",
    styleUrls: ["deleted.modals.scss"]
})

export class DeletdModals implements OnInit {

    ngOnInit() { }

    constructor(private _dialogRef:MatDialogRef<DeletdModals>){}


public closeDialog():void{
    this._dialogRef.close();
}

public deleteItem():void{
    this._dialogRef.close('yes');
}
}