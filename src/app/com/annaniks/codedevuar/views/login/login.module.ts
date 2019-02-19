import { NgModule } from "@angular/core";
import { LoginRoutingModule } from './login.routind.module';
import { LoginView } from './login.view';
import { LoginService } from './login.service';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [LoginView],
    imports: [LoginRoutingModule,ReactiveFormsModule,FormsModule,CommonModule],
    providers:[LoginService]
})

export class LoginModule {

}