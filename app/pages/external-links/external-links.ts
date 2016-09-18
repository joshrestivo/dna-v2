import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/external-links/external-links.html'
})
export class ExternalLinks {
    constructor(private _navController: NavController) {
    }

    goToExternalLinksPage(){
        this._navController.push(ExternalLinks);
    }
}