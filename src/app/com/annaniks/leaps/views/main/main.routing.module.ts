import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from "./main.view";

const mainRoutes: Routes = [
    {
        path: "", component: MainView, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: "src/app/com/annaniks/leaps/views/main/home/home.module#HomeModule" },
            { path: 'human/:id', loadChildren: "src/app/com/annaniks/leaps/views/main/human-page/human-page.module#HumanPageModule" },
            { path: "roles", loadChildren: "src/app/com/annaniks/leaps/views/main/roles/roles.module#RolesModule" },
            { path: "permissions", loadChildren: "src/app/com/annaniks/leaps/views/main/permissions/permissions.module#PermissionsModule" },
            { path: "organization", loadChildren: "src/app/com/annaniks/leaps/views/main/organization/organization.module#OrganizationModule" },
            { path: "statuses", loadChildren: "src/app/com/annaniks/leaps/views/main/statuses/statuses.module#StatusesModule" },
            { path: "users", loadChildren: "src/app/com/annaniks/leaps/views/main/users/users.module#UsersModule" },
            { path: "template", loadChildren: "src/app/com/annaniks/leaps/views/main/template/template.module#TemplateModule" }
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}