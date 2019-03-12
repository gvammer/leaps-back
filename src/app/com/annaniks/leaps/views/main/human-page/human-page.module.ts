import { NgModule } from "@angular/core";
import { HumanPageRoutingModule } from './human-page.routing.module';
import { HumanPangeView } from './human-page.view';
import { HomeService } from '../home/home.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [HumanPangeView],
    imports: [HumanPageRoutingModule, CommonModule,MatButtonModule],
    providers: [HomeService]
})

export class HumanPageModule {

}