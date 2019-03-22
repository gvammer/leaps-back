import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemplateService } from '../template/template.service';
import { WidthType, FildType, Fields, Section, Template, Statuses } from '../../../models/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "add-template",
    templateUrl: "add-template.view.html",
    styleUrls: ["add-template.view.scss"]
})

export class AddTemplateView implements OnInit {

    public titleGroup: FormGroup;
    public sections: Section[] = [];
    public filderItems: Fields[] = [];
    public addValue: boolean = false;
    public selecValue: string;
    public templateValue: Template;
    public fildType: FildType[] = [
        { type: "password" },
        { type: "text" },
        { type: "date" },
        { type: "numberic" },
        { type: "time" },
        { type: "email-address" },
        { type: "phone" },
        { type: "select" },
    ]
    public widthType: WidthType[] = [
        { type: 50 },
        { type: 100 }

    ]
    public statuses: Statuses[] = []
    public selector: any = { key: "", title: "", fields: [] }
    public typeValue: string;
    public selectedStatuses = [];

    constructor(private _templateService: TemplateService, private _activatedRoute: ActivatedRoute, private _router: Router) {
        this._activatedRoute.params.subscribe((params) => {
            this.typeValue = params.type;
        })
    }


    ngOnInit() {
        this._getTemplatesByType();
        this._getStatuses();
        this._formBuilder();

    }

    private _formBuilder(): void {
        this.titleGroup = new FormBuilder().group({
            type: ["", Validators.required],
        })
    }

    private _setpatchValue() {
        if (this.typeValue) {
            this.titleGroup.patchValue({
                type: this.typeValue,
            })

            this.sections = this.templateValue.sections;
            this.selectedStatuses = this.templateValue.statuses;
            console.log(this.selectedStatuses)

        }
    }

    private _getStatuses(): void {
        this._templateService.getStatuses().subscribe((data) => {
            console.log(data);
            this.statuses = data;
        })
    }

    public onChange($event, field) {
        if ($event == "select") {
            this.addValue = true;
        }
        else {
            field.values = []
            this.addValue = false;
        }

    }

    public addSection(): void {
        this.sections.push({ key: "", title: "", fields: [] })

    }

    public addField(item): void {
        item.fields.push({ key: "", title: "", type: "", _required: true, width: "", priority: "", rightSight: false, requiredStatuses: [], hideStatuses: [], values: [] });
    }

    public addDoctemplates() {
        if (this.typeValue) {
            this._templateService.editTemplates(this.templateValue._id, {
                type: this.titleGroup.value.type,
                sections: this.sections,
                statuses: this.selectedStatuses
            }).subscribe((data) => {
                this._router.navigate(["/template"]);
                console.log(data);

            })

        }
        else {
            this._templateService.addDoctemplates({
                type: this.titleGroup.value.type,
                sections: this.sections,
                statuses: this.selectedStatuses
            }).subscribe((data) => {
                this._router.navigate(["/template"]);
            })

        }




    }
    public addValueItem(field) {
        console.log(field);
        field.values.push({ value: '' });


    }

    public deleteSelector(index, item) {
        this.sections.splice(index, 1)
    }

    public deleteField(index, item) {
        item.fields.splice(index, 1)
    }

    deleteValue(field, index) {
        field.values.splice(index, 1);

    }


    private _getTemplatesByType() {
        this._templateService.getTmplateByType(this.typeValue)
            .subscribe((data: Template) => {
                this.templateValue = data;
                this._setpatchValue();
                console.log(this.templateValue);

            })
    }

}