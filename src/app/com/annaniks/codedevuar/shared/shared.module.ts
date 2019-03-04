import { NgModule } from "@angular/core";
import { ToolBarComponent,  LeftMenuComponent } from '../component';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { MenuService } from '../service/menu.service';
import { ApiService } from '../service/api.service';



@NgModule({
    declarations: [ToolBarComponent,LeftMenuComponent],
    imports: [CommonModule,RouterModule],
    providers:[ApiService,MenuService],
    exports: [ToolBarComponent,LeftMenuComponent],
})

export class SharedModule { }