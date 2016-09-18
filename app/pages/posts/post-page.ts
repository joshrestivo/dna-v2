import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
    templateUrl: 'build/pages/posts/post-page.html'
})

    export class PostPage {

        p: any;
        private title: any;
        private url: any;

        constructor(private nav: NavController, navParams: NavParams) {

            this.p = navParams.get('p');

    }


}