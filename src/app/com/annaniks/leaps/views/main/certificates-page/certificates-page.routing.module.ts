import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CertificatesPangeView } from './certificates-page.view';

const humanPageRouter: Routes = [
    { path: "", component: CertificatesPangeView }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(humanPageRouter)],
    exports: [RouterModule]
})

export class CertificatesPageRoutingModule {

}