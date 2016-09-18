"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var streets_page_1 = require('../streets/streets-page');
var events_page_1 = require('../dna-news/events-page');
var events_page_2 = require('../dna-events/events-page');
var buildings_page_1 = require('../bldg-contacts/buildings-page');
var links_page_1 = require('../external-links/links-page');
var HomePage = (function () {
    function HomePage() {
        this.page1Root = streets_page_1.StreetClosures;
        this.page2Root = events_page_1.DnaNews;
        this.page3Root = events_page_2.DnaEvents;
        this.page4Root = buildings_page_1.BldgContacts;
        this.page5Root = links_page_1.ExternalLinks;
    }
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home-page/home-page.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
