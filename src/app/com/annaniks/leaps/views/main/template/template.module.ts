import { NgModule } from "@angular/core";
import { TemplateRouterModule } from './template.routing.module';
import { TemplateView } from './template.view';
import { AddTemplateModals } from '../../../modals';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {ButtonModule} from 'primeng/button';
import { TemplateService } from './template.service';

@NgModule({
    declarations: [TemplateView,AddTemplateModals],
    imports: [TemplateRouterModule,FormsModule,ReactiveFormsModule,CommonModule,MatDialogModule,ButtonModule],
    exports: [],
    entryComponents:[AddTemplateModals],
    providers:[TemplateService]
})

export class TemplateModule {

}