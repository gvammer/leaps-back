import { Component, OnInit } from "@angular/core";
import { StatusesService } from './statuses.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStatusesModals,AddStatusesModals } from '../../../modals';
import { Statuses } from '../../../models/models';



@Component({
    selector: "app-statuses",
    templateUrl: "statuses.view.html",
    styleUrls: ["statuses.view.scss"]
})

export class StausesView implements OnInit {

    public statusesItems: Statuses;

    constructor(private _statusesService: StatusesService, private _dialog: MatDialog) { }

    ngOnInit() {
        this._getStatuses();
    }


    public openAddStatuses(): void {
        const dialogRef = this._dialog.open(AddStatusesModals, {
            width: "686px",
            height: "444px",
            data: {
                data: this.statusesItems,
            }
        });
        dialogRef.afterClosed()
        .subscribe(data=>{
            if(data=='add'){
                this._getStatuses();
            }
        })
    }

    private _getStatuses() {
        this._statusesService.getStatuses()
            .subscribe((data:Statuses) => {
                this.statusesItems = data;
                console.log(data);

            })
    }

    public deleteStatus(item){
        this._statusesService.delete(item._id).subscribe(
            data=>{
                console.log(data);
                this._getStatuses();
            }
        )
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