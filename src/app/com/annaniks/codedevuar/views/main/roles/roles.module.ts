import { NgModule } from "@angular/core";
import { RolesView } from './roles.view';
import { RolesRoutingModule } from './roles.routing.module';
import { RolesService } from './roles.service';
import { CommonModule } from '@angular/common';
import { AddRolesModals } from '../../../modals/roles-add/roles-add.modals';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [RolesView, AddRolesModals],
    imports: [RolesRoutingModule, CommonModule,MatDialogModule],
    providers: [RolesService],
    entryComponents: [AddRolesModals]
})

export class RolesModule {

}