import { NgModule } from "@angular/core";
import { ToolBarComponent, ListComponent, ListItemComponent, LeftMenuComponent } from '../component';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { MenuService } from '../service/menu.service';
import { ApiService } from '../service/api.service';



@NgModule({
    declarations: [ToolBarComponent, ListComponent, ListItemComponent,LeftMenuComponent],
    imports: [CommonModule,RouterModule],
    providers:[ApiService,MenuService],
    exports: [ToolBarComponent, ListComponent, ListItemComponent,LeftMenuComponent],
})

export class SharedModule { }