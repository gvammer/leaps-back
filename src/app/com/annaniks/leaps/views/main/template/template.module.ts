import { NgModule } from "@angular/core";
import { TemplateRouterModule } from './template.routing.module';
import { TemplateView } from './template.view';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { TemplateService } from './template.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [TemplateView],
    imports: [TemplateRouterModule, FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, ButtonModule, CollapsibleModule,SharedModule],
    exports: [],
    entryComponents: [],
    providers: [TemplateService]
})

export class TemplateModule {

}