import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HumanPangeView } from './human-page.view';

const humanPageRouter: Routes = [
    { path: "", component: HumanPangeView }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(humanPageRouter)],
    exports: [RouterModule]
})

export class HumanPageRoutingModule {

}