import { Component, OnInit } from "@angular/core";
import { UsersService } from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AddUserModal, DeletdModals } from '../../../modals';
import { Users } from '../../../models/models';


@Component({
    selector: "app-users",
    templateUrl: "users.view.html",
    styleUrls: ["users.view.scss"]
})

export class UsersView implements OnInit {

    public usersInfo: Users[]=[];
    public userItems:Users[]=[];
    private _messages;
    pageLength:number=5;
    page:number=1;

    constructor(private _usersService: UsersService, private _dialog: MatDialog, private _messageService: MessageService) { }

    ngOnInit() {
        this._getUsers();
    }
    public onChangeUsers($event):void{
        this.page=$event.pageNumber;
        this.userItems=this.usersInfo.slice((this.page-1)*this.pageLength,this.page*this.pageLength);
    }

    private _getUsers() {
        this._usersService.getUsers()
            .subscribe((data: Users[]) => {
                this.usersInfo = data;

                this.userItems=this.usersInfo.slice((this.page-1)*this.pageLength,this.page*this.pageLength);
                console.log(data);
                
            })

    }

    public addUsersactive(index) {
        for (var i = 0; i < this.usersInfo.length; i++) {
            var userId = this.userItems[index]._id
        }
   //     console.log(userId);

        this._usersService.addUsersactive(userId, {

        }).subscribe((data) => {
            this._messages = data;
            this._messageService.add({ severity: 'success', summary: 'Service Message', detail: this._messages });
            this._getUsers();
           // console.log(this._messages, "messages");


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
    public editUserModal(item): void {
        const dialogRef = this._dialog.open(AddUserModal, {
            width: "686px",
            height: "686px",
            data: {
                editable: true,
                data: item,
            }
        });
        dialogRef.afterClosed()
        .subscribe((data)=>{
            if(data=="update"){
                this._getUsers();
            }
        })
        
    }

    public deleteUsers(item): void {
        const dialogRef=this._dialog.open(DeletdModals,{
            width:"444px",
            height:"400px"
        });
        dialogRef.afterClosed()
        .subscribe((data)=>{
            if(data=="yes"){
                this._usersService.deleteUsers(item._id)
                .subscribe((data) => {
                    this._getUsers();
                })
            }
        })

      

    }
}