import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router'; 
import { Certificates, Button } from '../../../models/models';
import { CertificateService } from '../certificates/certificates.service';


@Component({
    selector: "app-certificates-page",
    templateUrl: "certificates-page.view.html",
    styleUrls: ["certificates-page.view.scss"]
})

export class CertificatesPangeView implements OnInit {
    public status: string;
    private _id: string;
    public listItemData: any[] = [];

    public buttons: Button[];
    public ststuseId: string;

    constructor(private _activeRouter: ActivatedRoute, private _certificateService: CertificateService) {
        this._activeRouter.params.subscribe((params) => {
            this._id = params.id;
        })
    }

    ngOnInit() {
        this._userScertificatesById();
    }

    private _userScertificatesById() {
        this._certificateService.getUserById(this._id)
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
        this._certificateService.certificatesStatuses(this._id, {
            status:_id,
        }).subscribe((data) => {
            console.log(data);

        })
    }

}