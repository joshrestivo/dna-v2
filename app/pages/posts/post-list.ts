import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {PostPage} from '../posts/post-page';


@Component({
    templateUrl: 'build/pages/posts/post-list.html'
})

    export class PostList {

        posts: any;
        private title: any;
        public url: any;

        constructor(private nav: NavController, navParams: NavParams, private http: Http) {

            this.url = navParams.get('url');
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

        doRefresh(refresher){
            this.getPosts(this.url);
            console.log('Refreshing!', refresher);
            setTimeout(() => {
                console.log('Pull to refresh complete!', refresher);
                refresher.complete();
            })
        }

        doStarting() {
            console.log('Pull started!');
        }

        doPulling(amt) {
            console.log('You have pulled', amt);
        }

        openPost(post) {
            this.nav.push(PostPage, {
                p: post
            });
        }
}