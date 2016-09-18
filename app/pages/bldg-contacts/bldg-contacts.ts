import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'build/pages/bldg-contacts/bldg-contacts.html'
})
export class BldgContacts {
    constructor(private nav: NavController, private navParams: NavParams, private http: Http) {}

    private bldgContacts: any;
    
    openModal(building) {

        var url = this.navParams.get('parameter1');

        var bldgContactsApi = url + '/bldg_contacts/' + building.ID;
        var buildingApi = url + '/detail/' + building.ID;

        this.http.get(bldgContactsApi).subscribe(data => {
            var bldgContacts = data;
            var rolesArray = {};
            for (var i = 0; i < this.bldgContacts.length; i++) {
                var contact = bldgContacts[i];
                for (var j = 0; j < contact.roles.length; j++) {
                    var role = contact.roles[j];
                    var contactDetails = [contact.title, contact.photo, contact.email];
                    if (rolesArray[role] === undefined) {
                        rolesArray[role] = [];
                    }
                    rolesArray[role].push(contactDetails);
                }
            }

            var rolesList = rolesArray;

        });

        //this.modal.show();

    }

    goToBldgContactsPage(){
        this.nav.push(BldgContacts);
    }
}