import { NgModule } from "@angular/core";
import { PermissionsView } from './permissions.view';
import {RouterModule,Routes} from "@angular/router";

const permissionsRouter:Routes=[
    {path:"",component:PermissionsView}
]

@NgModule({
    imports: [RouterModule.forChild(permissionsRouter)],
    exports:[RouterModule]
})

export class PermissionsRoutingModule {

}