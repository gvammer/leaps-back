import { NgModule } from "@angular/core";
import { UsersRoutingModule } from './users.routing.module';
import { UsersView } from './users.view';
import { UsersService } from './users.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { CommonModule } from '@angular/common';
import { AddUserModal } from '../../../modals/add-user/add-user.modals';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
    declarations: [UsersView,AddUserModal],
    imports: [UsersRoutingModule,CollapsibleModule,CommonModule,MatDialogModule,ReactiveFormsModule,FormsModule],
    providers: [UsersService,AddUserModal],
    entryComponents:[AddUserModal]
})

export class UsersModule {

}