import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CertificatesView } from './certificates.view';


const homeRoutes: Routes = [
    { path: "", component: CertificatesView },
 
]
@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule],
})

export class CertificatesRoutingModule {

}