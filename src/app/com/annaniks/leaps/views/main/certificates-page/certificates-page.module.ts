import { NgModule } from "@angular/core";
import { CertificatesPageRoutingModule } from './certificates-page.routing.module';
import { CertificatesPangeView } from './certificates-page.view';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CertificateService } from '../certificates/certificates.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InputComponent } from '../../../component';
import { MatRadioModule } from '@angular/material/radio';
import { MessageModals } from '../../../modals';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollapsibleModule } from 'angular2-collapsible';
@NgModule({
    declarations: [CertificatesPangeView, InputComponent, MessageModals],
    imports: [CertificatesPageRoutingModule,
        CommonModule, MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        ReactiveFormsModule,
        CollapsibleModule,
        FormsModule
    ],
    providers: [CertificateService, MatDatepickerModule],
    entryComponents: [MessageModals]
})

export class CerTificatesPageModule {

}