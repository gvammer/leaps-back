import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { AddTemplateView } from './add-template.view';

const  addTemplateRouter:Routes=[
    {path:"",component:AddTemplateView}
]

@NgModule({
    imports: [RouterModule.forChild(addTemplateRouter)],
    exports: [RouterModule],
})

export class AddTemplateRouterModule {

}