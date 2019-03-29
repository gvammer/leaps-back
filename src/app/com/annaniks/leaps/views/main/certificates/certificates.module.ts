import { NgModule } from "@angular/core";
import { CertificatesView } from "./certificates.view";
import { CertificatesRoutingModule } from "./certificates.routing.module";
import { CollapsibleModule } from 'angular2-collapsible';
import { CommonModule } from '@angular/common';
import { CertificateService } from './certificates.service';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    declarations: [CertificatesView],
    imports: [
        CertificatesRoutingModule,
        CollapsibleModule,
        CommonModule,
        SharedModule,
    ],
    providers: [CertificateService],
    exports: [],
})

export class CertificatesModule {

}