import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router'; 
import { Certificates, Button } from '../../../models/models';
import { CertificateService } from '../certificates/certificates.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageModals } from '../../../modals';


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
    private values:any = null
    constructor(private _activeRouter: ActivatedRoute, private _certificateService: CertificateService,private _dialog:MatDialog) {
        this._activeRouter.params.subscribe((params) => {
            this._id = params.id;
        })
    }

    ngOnInit() {
        this._getTamplate()
        
    }
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());
    
    private _getTamplate(){
        this._certificateService.getTemplateById("birth").subscribe((data:any)=>{
            this._userScertificatesById();
            this.listItemData = data.sections;
        });
    }
    private _userScertificatesById() {
        this._certificateService.getUserById(this._id)
            .subscribe((data: Certificates) => {
                this.buttons=data.buttons;
                console.log(this.buttons);
                
                this.values = data.information;
                this.listItemData = this.listItemData.map(item=>{
                    item.fields = item.fields.map(field=>{
                        field.edit = field.editableStatuses.map(i=>i.name).indexOf(this.values.status)>-1;
                        field.hide = field.hideStatuses.map(i=>i.name).indexOf(this.values.status)>-1;
                        field.required = field.requiredStatuses.map(i=>i.name).indexOf(this.values.status)>-1;
                        return field;
                    })

                        return item;
                })
                /*
                let listItemData = data;
                console.log(data);
                
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
                */
            })
   

    }

    get id(): string {
        return this._id
    }

    public certificatesStatuses(_id) {
        console.log(this.listItemData);
      
            const dialogref=this._dialog.open(MessageModals,{
                width:"444px",
                height:"400px",
            })
    

    //     this._certificateService.certificatesStatuses(this._id, {
    //         status:_id,
    //     }).subscribe((data) => {
    //         console.log(data);

    //     })
     }

}