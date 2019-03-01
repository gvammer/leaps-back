import { NgModule } from "@angular/core";
import { RolesView } from './roles.view';
import { RolesRoutingModule } from './roles.routing.module';
import { RolesService } from './roles.service';
import { CommonModule } from '@angular/common';
import { AddRolesModals } from '../../../modals/roles-add/roles-add.modals';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { CollapsibleModule } from 'angular2-collapsible';
import { AddPermissions } from '../../../modals/add-permissions/add-permissions.component';
import { UpdateRolesModals } from '../../../modals/update-roles/update-roles.modals';



@NgModule({
    declarations: [RolesView, AddRolesModals,AddPermissions,UpdateRolesModals],
    imports: [RolesRoutingModule, CommonModule,MatDialogModule,FormsModule,ReactiveFormsModule,CollapsibleModule],
    providers: [RolesService],
    entryComponents: [AddRolesModals,AddPermissions,UpdateRolesModals]
})

export class RolesModule {

}