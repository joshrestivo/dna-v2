import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/shared/posts-rss.html'
})
export class StreetClosures {
    constructor(private nav: NavController) {
    }

    get 
    goToStreetsPage(){
        this.nav.push(StreetClosures);
    }
}