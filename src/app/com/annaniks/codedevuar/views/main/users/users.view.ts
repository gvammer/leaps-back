import { Component, OnInit } from "@angular/core";
import { UsersService } from './users.service';


@Component({
    selector: "app-users",
    templateUrl: "users.view.html",
    styleUrls: ["users.view.scss"]
})

export class UsersView implements OnInit {

    public usersInfo: any;

    constructor(private _usersService: UsersService) { }

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

        }).subscribe((data) => {
            console.log(data);


        })
    }
}