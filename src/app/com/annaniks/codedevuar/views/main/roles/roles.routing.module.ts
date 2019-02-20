import { NgModule } from "@angular/core";
import { RolesView } from './roles.view';
import { RouterModule, Routes } from "@angular/router";

const rolsRouter: Routes = [
    { path: "", component: RolesView }
]

@NgModule({
    imports: [RouterModule.forChild(rolsRouter)],
    exports: [RouterModule],
})

export class RolesRoutingModule {

}