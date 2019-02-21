import { Component, OnInit } from "@angular/core";
import { PermissionsService } from './permissions.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { Permission, Role } from './permissions.models';
@Component({
    selector: "app-permissions",
    templateUrl: "permissions.view.html",
    styleUrls: ["permissions.view.scss"]
})

export class PermissionsView implements OnInit {

    private _rolesInfo: Role[] = [];
    private _permissionsInfo: Permission[] = [];
    private _permissionForm: FormGroup;

    constructor(private _permissionsService: PermissionsService, private _fb: FormBuilder) { }

    ngOnInit() {
        this._formBuilder();
        this._getTableData();
    }

    private _formBuilder(): void {
        this._permissionForm = this._fb.group({});
    }

    private _getTableData(): void {
        const combined = forkJoin(this._getUsersRoles(), this._getUserPermissions());
        combined.subscribe(() => {
            this._setControls();
        })
    }


    private _setControls(): void {
        this._
    }


    private _getUsersRoles(): Observable<void> {
        return this._permissionsService.getUserRoles().pipe(
            map((data: Role[]) => {
                this._rolesInfo = data;
            })
        )
    }

    private _getUserPermissions(): Observable<void> {
        return this._permissionsService.getUserPermissions().pipe(
            map((data: Permission[]) => {
                this._permissionsInfo = data;
            })
        )
    }
}
