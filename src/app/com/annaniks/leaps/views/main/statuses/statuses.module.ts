import { NgModule } from "@angular/core";
import { StatusesRoutingModule } from './statuses.routing.module';
import { StausesView } from './statuses.view';
import { StatusesService } from './statuses.service';
import { MatDialogModule } from '@angular/material/dialog';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CollapsibleModule } from 'angular2-collapsible';
import { UpdateStatusesModals, AddStatusesModals } from '../../../modals';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    declarations: [StausesView,AddStatusesModals,UpdateStatusesModals],
    imports: [StatusesRoutingModule,
        MultiSelectModule,
        DropdownModule,
        ButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        CollapsibleModule,
        SharedModule
    ],
    providers: [StatusesService],
    entryComponents:[AddStatusesModals,UpdateStatusesModals]
})

export class StatusesModule {

}