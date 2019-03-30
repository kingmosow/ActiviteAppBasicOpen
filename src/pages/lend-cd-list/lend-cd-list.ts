import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {cdService} from "../../service/cdService";
import {Cd} from "../../models/cd";

/**
 * Generated class for the LendCdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd-list',
  templateUrl: 'lend-cd-list.html',
})
export class LendCdListPage implements OnInit{

  cd: Cd;
  index: number;

  constructor(public navParams: NavParams,  public viewCtrl: ViewController,private cdService: cdService) {
  }
  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index];
  }
  onToggleCd() {
    this.cd.isOn = !this.cd.isOn;
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LendCdListPage');
  }

}
