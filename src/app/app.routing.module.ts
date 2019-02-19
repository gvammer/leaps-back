import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "src/app/com/annaniks/codedevuar/views/login/login.module#LoginModule" },
  { path: "", loadChildren: "./com/annaniks/codedevuar/views/main/main.module#MainModule" },

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}