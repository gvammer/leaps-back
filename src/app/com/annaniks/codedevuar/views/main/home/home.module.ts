import { NgModule } from "@angular/core";
import { HomeView } from "./home.view";
import { HomeViewRoutingModule } from "./home.routing.module";
import { CollapsibleModule } from 'angular2-collapsible';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    declarations: [HomeView],
    imports: [
        HomeViewRoutingModule,
        CollapsibleModule,
        CommonModule,
        SharedModule,
    ],
    providers: [HomeService],
    exports: [],
})

export class HomeModule {

}