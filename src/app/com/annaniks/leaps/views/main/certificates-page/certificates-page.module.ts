import { NgModule } from "@angular/core";
import { CertificatesPageRoutingModule } from './certificates-page.routing.module';
import { CertificatesPangeView } from './certificates-page.view';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { CertificateService } from '../certificates/certificates.service';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InputComponent } from '../../../component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
    declarations: [CertificatesPangeView,InputComponent],
    imports: [CertificatesPageRoutingModule, CommonModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule],
    providers: [CertificateService,MatDatepickerModule]
})

export class CerTificatesPageModule {

}