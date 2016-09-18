/// <reference path="../../../typings/globals/xml2js/index.d.ts" />

import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DetailPage} from './posts-rss-detail';

@Component({
    templateUrl: 'build/pages/rss/posts-rss.html',
})

export class RssComponent {

    private fetchRss: any;
    private entries: Array<any>;
    private parser: any;
    private url: any;


    constructor(private nav: NavController, navParams: NavParams) {


        this.url = navParams.get('parameter1');



        console.log(this.entries);
    }
    
    openPage(entry) {
        this.nav.push(DetailPage, {selectedEntry:entry});
    }

}