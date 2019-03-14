import { Component, OnInit } from "@angular/core";
import { UsersService } from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AddUserModal } from '../../../modals';
import { Users } from '../../../models/models';


@Component({
    selector: "app-users",
    templateUrl: "users.view.html",
    styleUrls: ["users.view.scss"]
})

export class UsersView implements OnInit {

    public usersInfo: Users[];
    private _messages;

    constructor(private _usersService: UsersService, private _dialog: MatDialog, private _messageService: MessageService) { }

    ngOnInit() {
        this._getUsers();
    }

    private _getUsers() {
        this._usersService.getUsers()
            .subscribe((data: Users[]) => {
                this.usersInfo = data;
                console.log(this.usersInfo);
            })

    }

    public addUsersactive(index) {
        for (var i = 0; i < this.usersInfo.length; i++) {
            var userId = this.usersInfo[index]._id
        }
        console.log(userId);

        this._usersService.addUsersactive(userId, {

        }).subscribe((data) => {
            this._messages = data;
            this._messageService.add({ severity: 'success', summary: 'Service Message', detail: this._messages });
            this._getUsers();
            console.log(this._messages, "messages");


        })
    }

    public openAddUser(): void {
        const dialogRef = this._dialog.open(AddUserModal, {
            width: "686px",
            height: "686px",
        });
        dialogRef.afterClosed()
            .subscribe(data => {
                if (data == "login") {
                    this._getUsers();
                }
            })
    }

    public deleteUsers(item) {
        this._usersService.deleteUsers(item._id)
        .subscribe((data)=>{
            console.log(data);
            this._getUsers();
        })
     
    }
}