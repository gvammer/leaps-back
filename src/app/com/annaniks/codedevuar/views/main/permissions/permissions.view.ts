import { Component, OnInit } from "@angular/core";
import { PermissionsService } from './permissions.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { Permission, Role } from './permissions.models';
import { MessageService } from 'primeng/api';

@Component({
    selector: "app-permissions",
    templateUrl: "permissions.view.html",
    styleUrls: ["permissions.view.scss"]
})



export class PermissionsView implements OnInit {

    private _rolesInfo: Role[] = [];
    private _permissionsInfo: Permission[] = [];
    private _rolesForm: FormGroup;
    public messages: string;

    constructor(private _permissionsService: PermissionsService, private _fb: FormBuilder, private _messageService: MessageService) { }

    ngOnInit() {
        this._formBuilder();
        this._getTableData();
    }

    private _formBuilder(): void {
        this._rolesForm = this._fb.group({});

    }

    private _getTableData(): void {
        const combined = forkJoin(
            this._getUsersRoles(),
            this._getUserPermissions()
        );
        combined.subscribe(() => {
            this._setControls();
        })
    }


    private _setControls(): void {
        this._rolesInfo.forEach((element: Role, index: number) => {
            this._rolesForm.addControl(element.name, this._setRoleControls(index))
        })
    }

    private _setRoleControls(index: number): FormArray {
        let roleControls = [];
        this._permissionsInfo.forEach((element, index) => {
            roleControls.push(new FormControl(false))
        })
        this._permissionsInfo.forEach((permission: Permission, permissionIndex: number) => {
            this._rolesInfo[index].permissions.forEach((rolePermission: Permission, rolePermIndex: number) => {
                if (permission._id === rolePermission._id) {
                    roleControls[permissionIndex].patchValue(true);
                }
            })
        })
        return this._fb.array(roleControls);
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

    public onClickCheckbox(roleId: string, roleName: string): void {
        setTimeout(() => {
            let permissions: Permission[] = [];
            this._rolesForm.get(roleName).value.forEach((element, index) => {
                if (element) {
                    permissions.push(this._permissionsInfo[index]);
                }
            })
            this._sendRoles(roleId, permissions);
        })
    }

    private _sendRoles(roleId: string, permissions: Permission[]): void {
        this._permissionsService.putUserPermissions(roleId, {
            permissions: permissions
        }).subscribe((data: any) => {
            this.messages = data.status;
            this._messageService.add({ severity: 'success', summary: 'Service Message', detail: this.messages });
            console.log(data);


        });
    }

    get rolesForm(): FormGroup {
        return this._rolesForm;
    }

    get rolesInfo() {
        return this._rolesInfo
    }

    get permissionsInfo() {
        return this._permissionsInfo
    }
}
