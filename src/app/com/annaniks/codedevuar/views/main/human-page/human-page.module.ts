import { NgModule } from "@angular/core";
import { HumanPageRoutingModule } from './human-page.routing.module';
import { HumanPangeView } from './human-page.view';
import { HomeService } from '../home/home.service';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [HumanPangeView],
    imports: [HumanPageRoutingModule, CommonModule],
    providers: [HomeService]
})

export class HumanPageModule {

}