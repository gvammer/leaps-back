import { NgModule } from "@angular/core";
import { PermissionsView } from './permissions.view';
import { PermissionsRoutingModule } from './permissions.routing.module';
import { PermissionsService } from './permissions.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { CollapsibleModule } from 'angular2-collapsible';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    declarations: [PermissionsView],
    imports: [PermissionsRoutingModule, CommonModule, ReactiveFormsModule,MatTableModule,CollapsibleModule,ToastModule,SharedModule],
    entryComponents:[],
    providers: [PermissionsService,MessageService]
})

export class PermissionsModule {

}