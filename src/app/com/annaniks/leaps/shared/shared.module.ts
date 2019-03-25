import { NgModule } from "@angular/core";
import { ToolBarComponent,  LeftMenuComponent, PaginatorComponent } from '../component';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { MenuService } from '../service/menu.service';
import { ApiService } from '../service/api.service';
import { DeletdModals } from '../modals';



@NgModule({
    declarations: [ToolBarComponent,LeftMenuComponent,DeletdModals,PaginatorComponent],
    imports: [CommonModule,RouterModule],
    providers:[ApiService,MenuService],
    entryComponents:[DeletdModals],
    exports: [ToolBarComponent,LeftMenuComponent,PaginatorComponent],
})

export class SharedModule { }