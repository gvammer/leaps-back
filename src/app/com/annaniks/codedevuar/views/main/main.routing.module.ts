import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from "./main.view";

const mainRoutes: Routes = [
    {
        path: "", component: MainView, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", loadChildren: "src/app/com/annaniks/codedevuar/views/main/home/home.module#HomeModule" },
            { path: 'human/:id', loadChildren: "src/app/com/annaniks/codedevuar/views/main/human-page/human-page.module#HumanPageModule" },
            { path: "roles", loadChildren: "src/app/com/annaniks/codedevuar/views/main/roles/roles.module#RolesModule" },
            { path: "permissions", loadChildren: "src/app/com/annaniks/codedevuar/views/main/permissions/permissions.module#PermissionsModule" },
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}