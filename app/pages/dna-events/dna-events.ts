import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/dna-events/dna-events.html'
})
export class DnaEvents {
    constructor(private _navController: NavController) {
    }

    goToDnaEventsPage(){
        this._navController.push(DnaEvents);
    }
}