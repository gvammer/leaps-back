import { NgModule } from "@angular/core";
import { StatusesRoutingModule } from './statuses.routing.module';
import { StausesView } from './statuses.view';
import { StatusesService } from './statuses.service';
import { AddStatusesModals } from '../../../modals/add-statuses/add-statuses.modals';
import { MatDialogModule } from '@angular/material/dialog';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CollapsibleModule } from 'angular2-collapsible';
import { UpdateStatusesModals } from '../../../modals/update-statuses/update-statuses.modals';

@NgModule({
    declarations: [StausesView,AddStatusesModals,UpdateStatusesModals],
    imports: [StatusesRoutingModule,MatDialogModule,ReactiveFormsModule,FormsModule,CommonModule,CollapsibleModule],
    providers: [StatusesService],
    entryComponents:[AddStatusesModals,UpdateStatusesModals]
})

export class StatusesModule {

}