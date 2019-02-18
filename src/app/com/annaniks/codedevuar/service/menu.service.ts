import { Injectable } from "@angular/core";

@Injectable()

export class MenuService {

    private _leftMenu: boolean = true;

    constructor() { }

    public openLeftMenu(): void {
        this._leftMenu = !this._leftMenu;

        
    }

    public getOpenMenu(): boolean {
        return this._leftMenu;
    }
}