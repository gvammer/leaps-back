import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemplateService } from '../../views/main/template/template.service';

@Component({
    selector: "add-template",
    templateUrl: "add-template.modals.html",
    styleUrls: ["add-template.modals.scss"],
})

export class AddTemplateModals implements OnInit {

    public titleGroup: FormGroup;
    public selectorItems: Array<object> = [];
    public filderItems: Array<object> = [];
    public fildType: any = [
        { type: "password" },
        { type: "text" },
        { type: "date" },
    ]
    public selector: any = { key: "", title: "", fields: [] }


    constructor(private _templateService: TemplateService) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.titleGroup = new FormBuilder().group({
            title: ["", Validators.required],
        })
    }


    public addSelector() {
        this.selectorItems.push({ key: "", title: "", fields: [] })

    }

    public addFilder(item) {
        item.fields.push({ key: "", title: "", type: "", _required: true, width: "", priority: "", rightSight: false, values: [] });
    }


    public addDoctemplates() {

        this._templateService.addDoctemplates({
            type: this.titleGroup.value.title,
            sections: this.selectorItems
        }).subscribe((data) => {
            console.log(data);

        })
    }
}