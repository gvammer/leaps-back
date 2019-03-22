import { NgModule } from "@angular/core";
import { AddTemplateRouterModule } from './add-template.routing.module';
import { AddTemplateView } from './add-template.view';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { TemplateService } from '../template/template.service';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
    declarations: [AddTemplateView],
    imports: [
        AddTemplateRouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        MultiSelectModule
    ],
    exports: [],
    providers: [TemplateService]
})

export class AddTemplateModule {

}