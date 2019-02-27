import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrganizationView } from './organization.view';

const organizationRouter: Routes = [
    { path: "", component: OrganizationView }
]

@NgModule({
    imports: [RouterModule.forChild(organizationRouter)],
    exports: [RouterModule],
})

export class OrganizationRoutingModule {

}