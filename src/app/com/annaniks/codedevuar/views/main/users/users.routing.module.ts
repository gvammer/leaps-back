import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersView } from './users.view';

const usersRourter: Routes = [
    { path: "", component: UsersView }
]

@NgModule({
    imports: [RouterModule.forChild(usersRourter)],
    exports: [RouterModule]
})

export class UsersRoutingModule {

}