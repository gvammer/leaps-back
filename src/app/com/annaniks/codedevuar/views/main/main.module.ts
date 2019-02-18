import { NgModule } from "@angular/core";
import { MainView } from "./main.view";
import { MainRoutingModule } from "./main.routing.module";
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [MainView],
    imports: [MainRoutingModule, SharedModule,CommonModule],
    providers: [],
    exports: []
})

export class MainModule {

}