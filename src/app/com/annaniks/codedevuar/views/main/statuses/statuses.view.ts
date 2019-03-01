import { Component, OnInit } from "@angular/core";
import { StatusesService } from './statuses.service';
import { MatDialog } from '@angular/material/dialog';
import { AddStatusesModals } from '../../../modals/add-statuses/add-statuses.modals';
import { UpdateStatusesModals } from '../../../modals/update-statuses/update-statuses.modals';


@Component({
    selector: "app-statuses",
    templateUrl: "statuses.view.html",
    styleUrls: ["statuses.view.scss"]
})

export class StausesView implements OnInit {

    public statusesItems: any;

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
        })
    }

    private _getStatuses() {
        this._statusesService.getStatuses()
            .subscribe((data) => {
                this.statusesItems = data;
                console.log(data);

            })
    }

    public openUpdateStatusModals(item): void {
        const dialogRef = this._dialog.open(UpdateStatusesModals, {
            width: "686px",
            height: "444px",
            data: {
                data: item
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