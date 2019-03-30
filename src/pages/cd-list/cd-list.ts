import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {cdService} from "../../service/cdService";
import {Cd} from "../../models/cd";
import {LendCdListPage} from "../lend-cd-list/lend-cd-list";

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  cdList: Cd[];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
              private menuCtrl: MenuController, private cdService: cdService) {
  }

  ionViewWillEnter() {
    this.cdList = this.cdService.cdList.slice();
  }
  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdListPage, {index: index});
    modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
