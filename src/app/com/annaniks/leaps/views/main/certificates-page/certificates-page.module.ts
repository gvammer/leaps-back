import { NgModule } from "@angular/core";
import { CertificatesPageRoutingModule } from './certificates-page.routing.module';
import { CertificatesPangeView } from './certificates-page.view';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { CertificateService } from '../certificates/certificates.service';

@NgModule({
    declarations: [CertificatesPangeView],
    imports: [CertificatesPageRoutingModule, CommonModule,MatButtonModule],
    providers: [CertificateService]
})

export class CerTificatesPageModule {

}