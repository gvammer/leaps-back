import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { StausesView } from './statuses.view';

const statusesRouter:Routes=[
    {path:"",component:StausesView}
]
@NgModule({
    imports: [RouterModule.forChild(statusesRouter)],
    exports: [RouterModule]
})

export class StatusesRoutingModule {

}