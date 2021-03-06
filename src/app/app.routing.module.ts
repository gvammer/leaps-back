import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './com/annaniks/leaps/guards/authguard.service';

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "src/app/com/annaniks/leaps/views/login/login.module#LoginModule" },
  { path: "", loadChildren: "./com/annaniks/leaps/views/main/main.module#MainModule",canActivate:[AuthGuard]  },

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}