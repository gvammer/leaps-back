import { NgModule } from "@angular/core";
import { PermissionsView } from './permissions.view';
import { PermissionsRoutingModule } from './permissions.routing.module';
import { PermissionsService } from './permissions.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { CollapsibleModule } from 'angular2-collapsible';
@NgModule({
    declarations: [PermissionsView],
    imports: [PermissionsRoutingModule, CommonModule, ReactiveFormsModule,MatTableModule,CollapsibleModule],
    providers: [PermissionsService]
})

export class PermissionsModule {

}