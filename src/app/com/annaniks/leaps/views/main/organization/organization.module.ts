import { NgModule } from "@angular/core";
import { OrganizationView } from './organization.view';
import { OrganizationRoutingModule } from './organization.routing.module';
import { OrganizationService } from './organization.service';
import { CommonModule } from '@angular/common';
import { CollapsibleModule } from 'angular2-collapsible';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddOrganization } from '../../../modals';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    declarations: [OrganizationView,AddOrganization],
    imports: [OrganizationRoutingModule,CommonModule,CollapsibleModule,MatDialogModule,ReactiveFormsModule,FormsModule,SharedModule],
    providers:[OrganizationService],
    entryComponents:[AddOrganization]
})

export class OrganizationModule {

}