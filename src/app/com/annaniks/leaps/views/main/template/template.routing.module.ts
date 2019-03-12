import {NgModule} from  "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { TemplateView } from './template.view';

const templateRouters:Routes=
[
    {path:"",component:TemplateView}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(templateRouters)],
    exports:[RouterModule],
})

export class TemplateRouterModule{

}