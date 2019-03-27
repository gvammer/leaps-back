import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { TemplateService } from './template.service';
import { DeletdModals } from '../../../modals';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: "app-template",
    templateUrl: "template.view.html",
    styleUrls: ["template.view.scss"]
})

export class TemplateView implements OnInit {

    public templateItems: Template[]=[];
    public pageLength: number = 5;
    public page: number = 1;
    public template: Template[] = [];

    constructor(private _matDialog: MatDialog, private _templateService: TemplateService) {

     }

    ngOnInit() {
        this._getTemplates();
    }

    public onPgeTemplateChange($event){
        this.page=$event.pageNumber;
        this.template = this.templateItems.slice((this.page - 1) * this.pageLength, this.page * this.pageLength);
        console.log(this.template);
        
    }

    private _getDoctemplatesTypes() {
        this._templateService.getDoctemplatesTypes()
            .subscribe((data) => {

            })
    }
    private _getTemplates() {
   
        this._templateService.getTemplates()
            .subscribe((data: Template[]) => {
                this.templateItems = data;
                this.template = this.templateItems.slice((this.page - 1) * this.pageLength, this.page * this.pageLength);
                console.log(this.template,"yujit");

            })
    }

    public deleteTemplate(item) {
        const dialogRef = this._matDialog.open(DeletdModals, {
            width: "444px",
            height: "400px",
        })
        dialogRef.afterClosed()
            .subscribe((data) => {
                if (data == "yes") {
                    this._templateService.deleteTemplate(item._id)
                        .subscribe((data) => {
                            this._getTemplates();
                        })

                }
            })



    }


}