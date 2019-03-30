import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CdListPage} from "../cd-list/cd-list";
import {BookListPage} from "../book-list/book-list";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  bookListPage = BookListPage;
  cdListPage = CdListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
