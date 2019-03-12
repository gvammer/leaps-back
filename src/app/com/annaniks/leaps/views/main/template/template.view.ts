import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddTemplateModals } from '../../../modals';

@Component({
    selector: "app-template",
    templateUrl: "template.view.html",
    styleUrls: ["template.view.scss"]
})

export class TemplateView implements OnInit {

    constructor(private _matDialog: MatDialog) { }

    ngOnInit() { }

    public openAddTemplateModal() {
        const dialogRef = this._matDialog.open(AddTemplateModals, {
            maxHeight:'80vh',
            width:'600px'
        })
    }

}