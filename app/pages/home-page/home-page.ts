import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PostList} from '../posts/post-list';
import {DnaEvents} from '../dna-events/dna-events';
import {BldgContacts} from '../bldg-contacts/bldg-contacts';
import {ExternalLinks} from '../external-links/external-links';
import {RssComponent} from '../rss/posts-rss';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

    private pages: any;   
    private logoUrl: any;
    private logoImage: any;
    private facebookUrl: any;
    private facebookLogo: any;
    private twitterUrl: any;
    private twitterLogo: any;

    constructor(private nav: NavController) {
        this.pages = [ {
            title : "Street Closures",
            icon : "ion-ios-speedometer",
            iconColor : "#7aca4f",
            page : RssComponent,
            url : 'http://www.downtownstl.org/category/downtown-street-alert/feed'
        }, {
            title : "DNA News",
            icon : "ion-ios-paper",
            iconColor : "#c5ae0a",
            page : PostList,
            url: 'http://www.saintlouisdna.org/wp-json/wp/v2/posts'
        }, {
            title : "DNA Events",
            icon : "ion-ios-calendar",
            iconColor : "#fb4828",
            page : DnaEvents,
            url : ''
        }, {
            title : "Building Contacts",
            icon : "ion-ios-people",
            iconColor : "#c41e3b",
            page : BldgContacts,
            url: 'https://dnac.6ceed.com/wp-json/dna/v1/building'
        }, {
            title : "External Links",
            icon : "ion-ios-world",
            iconColor : "#5ebeb0",
            page : ExternalLinks,
            url : ''
        }];

        this.logoUrl = 'http://saintlouisdna.org';
        this.logoImage = 'img/DNA-logo.png';
        this.facebookUrl = 'https://www.facebook.com/STL.DNA/';
        this.facebookLogo = 'img/facebook.png';
        this.twitterUrl = 'https://twitter.com/saintlouisdna';
        this.twitterLogo = 'img/twitter.png';
    }

    openPage(p) {
        this.nav.push(p.page, {
            url: p.url,
            title: p.title
        });
    }
}