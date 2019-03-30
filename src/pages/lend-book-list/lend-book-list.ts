import {Component, OnInit} from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {bookService} from "../../service/bookService";
import {Book} from "../../models/book";

/**
 * Generated class for the LendBookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book-list',
  templateUrl: 'lend-book-list.html',
})
export class LendBookListPage implements OnInit{

  index: number;
  book: Book;

  constructor(public navCtrl: NavController,private bookService: bookService,
              public viewCtrl: ViewController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookService.bookList[this.index];
  }
  onToggleBook() {
    this.book.isOn = !this.book.isOn;
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
