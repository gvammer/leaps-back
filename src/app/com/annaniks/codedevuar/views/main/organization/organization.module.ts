import { NgModule } from "@angular/core";
import { OrganizationView } from './organization.view';
import { OrganizationRoutingModule } from './organization.routing.module';
import { OrganizationService } from './organization.service';
import { CommonModule } from '@angular/common';
import { CollapsibleModule } from 'angular2-collapsible';
import { AddOrganization } from '../../../modals/add-organization/add-organization.modals';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



@NgModule({
    declarations: [OrganizationView,AddOrganization],
    imports: [OrganizationRoutingModule,CommonModule,CollapsibleModule,MatDialogModule,ReactiveFormsModule,FormsModule],
    providers:[OrganizationService],
    entryComponents:[AddOrganization]
})

export class OrganizationModule {

}