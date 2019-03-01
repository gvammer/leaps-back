import { Component, OnInit } from "@angular/core";
import { UsersService } from './users.service';
import { AddUserModal } from '../../../modals/add-user/add-user.modals';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';


@Component({
    selector: "app-users",
    templateUrl: "users.view.html",
    styleUrls: ["users.view.scss"]
})

export class UsersView implements OnInit {

    public usersInfo: any;
    private _messages:any;

    constructor(private _usersService: UsersService,private _dialog: MatDialog,private _messageService:MessageService) { }

    ngOnInit() {
        this._getUsers();
    }

    private _getUsers() {
        this._usersService.getUsers()
            .subscribe(data => {
                this.usersInfo = data;
            })
    }

    public addUsersactive(index) {
        for (var i = 0; i < this.usersInfo.length; i++) {
            var userId = this.usersInfo[index]._id
        }
        console.log(userId);

        this._usersService.addUsersactive(userId, {

        }).subscribe((data:any) => {
            this._messages = data.status;
            this._messageService.add({ severity: 'success', summary: 'Service Message', detail: this._messages });
            this._getUsers();
           console.log(data);


        })
    }

    public openAddUser(): void {
        const dialogRef = this._dialog.open(AddUserModal, {
            width: "686px",
            height: "686px",
        });
        dialogRef.afterClosed()
        .subscribe(data=>{
            if(data=="login"){
                this._getUsers();
            }
        })
    }
}