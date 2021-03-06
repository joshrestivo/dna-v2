import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LandingPage} from './pages/landing/landing-page';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class dnamobile {

    private rootPage:any;

    constructor(private platform:Platform) {
        this.rootPage = LandingPage;

        platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        });
    }

}


ionicBootstrap(dnamobile);
