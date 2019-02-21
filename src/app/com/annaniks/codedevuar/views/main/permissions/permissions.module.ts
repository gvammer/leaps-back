import { NgModule } from "@angular/core";
import { PermissionsView } from './permissions.view';
import { PermissionsRoutingModule } from './permissions.routing.module';
import { PermissionsService } from './permissions.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [PermissionsView],
    imports: [PermissionsRoutingModule, CommonModule, ReactiveFormsModule],
    providers: [PermissionsService]
})

export class PermissionsModule {

}