import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {PostPage} from "../posts/post-page"


@Component({
    templateUrl: 'build/pages/landing/landing-page.html'
})

export class LandingPage {

    posts: any;
    private title: any;
    private url: any;
    private source: any;

    constructor(private nav: NavController, navParams: NavParams, private http: Http) {

        this.url = 'http://www.saintlouisdna.org/wp-json/wp/v2/posts';
        this.source = 'DNA';
        this.title = navParams.get('title');
        this.http = http;
        this.posts = [];

        this.getPosts(this.url);

    }

    getPosts(url) {
        this.http.get(url + '?_embed=true')
            .map(res => res.json())
            .subscribe(data => {
                this.posts =  data;
                console.log(data);
            }, error => {
                console.log('failed');
            });
    }

    openPost(post) {
        this.nav.push(PostPage, {
            p: post
        });
    }
}