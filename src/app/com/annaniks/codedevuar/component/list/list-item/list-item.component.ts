import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../views/main/home/home.service';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss']
})
export class ListItemComponent implements OnInit {
    @Input('item') private _listItemData: any;
    private _isInnerOpen: boolean = false;

    constructor(private _router: Router, private _homeService: HomeService) { }

    ngOnInit() { }

    toggleInner(): void {
        this._isInnerOpen = !this._isInnerOpen;
    }

    get listItemData() {
        return this._listItemData;
    }

    get isInnerOpen(): boolean {
        return this._isInnerOpen;
    }

    public openHumanItems() {
        this._router.navigate(['human/' + this._listItemData._id]);
    }
}