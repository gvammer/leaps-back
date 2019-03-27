import { NgModule } from "@angular/core";
import { AddTemplateRouterModule } from './add-template.routing.module';
import { AddTemplateView } from './add-template.view';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { TemplateService } from '../template/template.service';
import { MultiSelectModule } from 'primeng/multiselect';
import { MatDialogModule } from '@angular/material/dialog';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
    declarations: [AddTemplateView],
    imports: [
        AddTemplateRouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        MultiSelectModule,
        MatDialogModule,
        DropdownModule
    ],
    exports: [],
    providers: [TemplateService]
})

export class AddTemplateModule {

}