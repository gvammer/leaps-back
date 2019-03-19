import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { TemplateService } from './template.service';
import { AddTemplateModals } from '../../../modals';

@Component({
    selector: "app-template",
    templateUrl: "template.view.html",
    styleUrls: ["template.view.scss"]
})

export class TemplateView implements OnInit {

    public templateItems: any;

    constructor(private _matDialog: MatDialog, private _templateService: TemplateService) { }

    ngOnInit() {
        this._getTemplates();
    }

    public openAddTemplateModal() {
        const dialogRef = this._matDialog.open(AddTemplateModals, {
            maxHeight: '100vh',
            maxWidth: '100vw'
        });
        dialogRef.afterClosed()
            .subscribe(data => {
                if (data == "add") {
                    console.log(data);

                    this._getTemplates();
                }
            })
    }

    public openEditTemplateModal(item) {
        const dialogRef = this._matDialog.open(AddTemplateModals, {
            maxHeight: '80vh',
            maxWidth:'100vw',
            data: {
                data: item,
                editable: true,
            }
        });
        dialogRef.afterClosed().subscribe((data) => {
            if (data == "edit") {
                this._getTemplates();
            }
        })
        console.log(item);

    }



    private _getDoctemplatesTypes() {
        this._templateService.getDoctemplatesTypes()
            .subscribe((data) => {
                console.log(data);

            })
    }
    private _getTemplates() {

        this._templateService.getTemplates()
            .subscribe((data) => {
                this.templateItems = data;
                console.log(this.templateItems);

            })
    }

    public deleteTemplate(item) {

        this._templateService.deleteTemplate(item._id)
            .subscribe((data) => {
                this._getTemplates();
                console.log(data);

            })

    }

}