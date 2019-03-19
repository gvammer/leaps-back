import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemplateService } from '../../views/main/template/template.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section, Fields, FildType } from '../../models/models';

@Component({
    selector: "add-template",
    templateUrl: "add-template.modals.html",
    styleUrls: ["add-template.modals.scss"],
})

export class AddTemplateModals implements OnInit {

    public titleGroup: FormGroup;
    public sections: Section[] = [];
    public filderItems: Fields[] = [];
    public addValue: boolean = false;
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
    public selector: any = { key: "", title: "", fields: [] }


    constructor(@Inject(MAT_DIALOG_DATA) public data, private _templateService: TemplateService, private _dialogRef: MatDialogRef<AddTemplateModals>) { }

    ngOnInit() {
        this._formBuilder();
        this._setpatchValue();

    }

    private _formBuilder(): void {
        this.titleGroup = new FormBuilder().group({
            type: ["", Validators.required],
        })
    }

    private _setpatchValue() {
        if (this.data && this.data.editable) {
            this.titleGroup.patchValue({
                type: this.data.data.type,
            })
            this.sections = this.data.data.sections;
        }

    }

    public onChange($event, field) {
        console.log($event);
        if ($event == "select") {
            this.addValue = true;
        }
        else {
            field.values = []
            this.addValue = false;
        }

    }

    public addValueItem(field) {
        console.log(field);
        field.values.push({ value: '' });


    }


    public addSection(): void {
        this.sections.push({ key: "", title: "", fields: [] })

    }

    public addField(item): void {
        item.fields.push({ key: "", title: "", type: "", _required: true, width: "", priority: "", rightSight: false, values: [] });
    }


    public addDoctemplates() {
        if (this.data && this.data.editable) {
            this._templateService.editTemplates(this.data.data._id, {
                type: this.titleGroup.value.type,
                sections: this.sections
            }).subscribe((data) => {
                console.log(data);

                this._dialogRef.close('edit');
            })

        }
        else {
            console.log(this.sections);

            this._templateService.addDoctemplates({
                type: this.titleGroup.value.type,
                sections: this.sections
            }).subscribe((data) => {
                this._dialogRef.close('add');
                console.log(data);

            })
        }

    }

    public closeModal() {
        this._dialogRef.close();
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

}