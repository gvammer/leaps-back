import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { Certificates, Button } from '../../../models/models';


@Component({
    selector: "app-human-page",
    templateUrl: "human-page.view.html",
    styleUrls: ["human-page.view.scss"]
})

export class HumanPangeView implements OnInit {
    public status: string;
    private _id: string;
    public listItemData: any[] = [];

    public buttons: Button[];
    public ststuseId: string;

    constructor(private _activeRouter: ActivatedRoute, private _homeService: HomeService) {
        this._activeRouter.params.subscribe((params) => {
            this._id = params.id;
        })
    }

    ngOnInit() {
        this._userScertificatesById();
    }

    private _userScertificatesById() {
        this._homeService.getUserById(this._id)
            .subscribe((data: Certificates) => {
                let listItemData = data;
                this.status = listItemData.information['status'];
                this.ststuseId = data._id;

                this.buttons = listItemData.buttons;
                let listItemDatKeys: string[] = Object.keys(listItemData.information);
                for (let i of listItemDatKeys) {
                    if (typeof listItemData.information[i] === 'object') {
                        let object = {};
                        object['name'] = i;
                        object['value'] = [];
                        for (let j of Object.keys((listItemData.information[i]) ? listItemData.information[i] : {})) {
                            let obj = {}
                            obj['name'] = j;
                            obj['value'] = listItemData.information[i][j];
                            object['value'].push(obj);

                        }
                        this.listItemData.push(object);
                    }
                }
            })
        console.log(this.listItemData);

    }

    get id(): string {
        return this._id
    }

    public certificatesStatuses(_id) {
        this._homeService.certificatesStatuses(this._id, {
            status:_id,
        }).subscribe((data) => {
            console.log(data);

        })
    }

}