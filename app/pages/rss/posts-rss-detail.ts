import {Page,NavController,NavParams} from 'ionic-angular';

@Page({
    templateUrl: '../../rss/posts-rss-detail.html'
})

export class DetailPage {

    private entry: any;

    constructor(private nav: NavController, private navParams: NavParams) {
        console.log('run');
        this.nav = nav;
        this.entry = navParams.get('selectedEntry');
        console.log('my entry is '+ this.entry.title);
    }

}