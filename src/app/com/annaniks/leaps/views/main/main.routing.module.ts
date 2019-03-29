import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from "./main.view";
//import { AuthGuard } from '../../guards/authguard.service';

const mainRoutes: Routes = [
    {
        path: "", component: MainView, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: "src/app/com/annaniks/leaps/views/main/certificates/certificates.module#CertificatesModule"},
            { path: 'human/:id', loadChildren: "src/app/com/annaniks/leaps/views/main/certificates-page/certificates-page.module#CerTificatesPageModule" },
            { path: "roles", loadChildren: "src/app/com/annaniks/leaps/views/main/roles/roles.module#RolesModule" },
            { path: "permissions", loadChildren: "src/app/com/annaniks/leaps/views/main/permissions/permissions.module#PermissionsModule" },
            { path: "organization", loadChildren: "src/app/com/annaniks/leaps/views/main/organization/organization.module#OrganizationModule" },
            { path: "statuses", loadChildren: "src/app/com/annaniks/leaps/views/main/statuses/statuses.module#StatusesModule" },
            { path: "users", loadChildren: "src/app/com/annaniks/leaps/views/main/users/users.module#UsersModule" },
            { path: "template", loadChildren: "src/app/com/annaniks/leaps/views/main/template/template.module#TemplateModule" },
            { path: "template/add", loadChildren: "src/app/com/annaniks/leaps/views/main/add-template/add-template.module#AddTemplateModule" },
            { path: "template/:type", loadChildren: "src/app/com/annaniks/leaps/views/main/add-template/add-template.module#AddTemplateModule" }
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
  
})

export class MainRoutingModule {

}