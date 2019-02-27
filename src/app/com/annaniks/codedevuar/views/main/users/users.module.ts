import { NgModule } from "@angular/core";
import { UsersRoutingModule } from './users.routing.module';
import { UsersView } from './users.view';
import { UsersService } from './users.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [UsersView],
    imports: [UsersRoutingModule,CollapsibleModule,CommonModule],
    providers: [UsersService],
})

export class UsersModule {

}