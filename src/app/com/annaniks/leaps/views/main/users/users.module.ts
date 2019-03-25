import { NgModule } from "@angular/core";
import { UsersRoutingModule } from './users.routing.module';
import { UsersView } from './users.view';
import { UsersService } from './users.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { AddUserModal,UniqueIdModal } from '../../../modals';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    declarations: [UsersView,AddUserModal,UniqueIdModal],
    imports: [UsersRoutingModule,CollapsibleModule,CommonModule,MatDialogModule,ReactiveFormsModule,FormsModule,ToastModule, SharedModule],
    providers: [UsersService,MessageService],
    entryComponents:[AddUserModal,UniqueIdModal]
})

export class UsersModule {

}