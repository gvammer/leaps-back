import { Component, OnInit } from "@angular/core";
import { StatusesService } from './statuses.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStatusesModals, AddStatusesModals, DeletdModals } from '../../../modals';
import { Statuses } from '../../../models/models';



@Component({
    selector: "app-statuses",
    templateUrl: "statuses.view.html",
    styleUrls: ["statuses.view.scss"]
})

export class StausesView implements OnInit {
   public  statusesData: Statuses[]=[];
    public statusesItem: Statuses[]=[];
    public pageLength:number=5;
    public page:number=1;

    constructor(private _statusesService: StatusesService, private _dialog: MatDialog) { }

    ngOnInit() {
        this._getStatuses();
    }
    
    public onChangeStatuses($event){
        this.page=$event.pageNumber;
        this.statusesItem=this.statusesData.slice((this.page-1)*this.pageLength,this.page*this.pageLength);
    }


    public openAddStatuses(): void {
        const dialogRef = this._dialog.open(AddStatusesModals, {
            width: "686px",
            height: "444px",
            data: {
                data: this.statusesData,
            }
        });
        dialogRef.afterClosed()
            .subscribe(data => {
                if (data == 'add') {
                    this._getStatuses();
                }
            })
    }

    private _getStatuses() {
        this._statusesService.getStatuses()
            .subscribe((data: Statuses[]) => {
                this.statusesData = data;
                this.statusesItem=this.statusesData.slice((this.page-1)*this.pageLength,this.page*this.pageLength);
                console.log(this.statusesItem);
                
            })
    }

    public deleteStatus(item) {
        const dialofRef = this._dialog.open(DeletdModals, {
            width: "444px",
            height: "400px",

        })
        dialofRef.afterClosed().subscribe((data) => {
            if (data == "yes") {
                this._statusesService.delete(item._id).subscribe(
                    data => {
                        console.log(data);
                        this._getStatuses();
                    })
            }
        })


    }
    public openUpdateStatusModals(item): void {
        const dialogRef = this._dialog.open(UpdateStatusesModals, {
            width: "686px",
            height: "444px",
            data: {
                data: item,
            }
        });
        dialogRef.afterClosed()
            .subscribe(data => {
                if (data == "update") {
                    this._getStatuses();
                }
            })
    }

}