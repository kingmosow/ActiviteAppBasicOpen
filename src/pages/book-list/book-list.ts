import { Component } from '@angular/core';
import {MenuController, ModalController, NavController} from 'ionic-angular';
import {bookService} from "../../service/bookService";
import {Book} from "../../models/book";
import {LendBookListPage} from "../lend-book-list/lend-book-list";

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  bookList: Book[];

  constructor(private modalCtrl: ModalController,
              private menuCtrl: MenuController, private bookService: bookService) {
  }

  ionViewWillEnter() {
    this.bookList = this.bookService.bookList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookListPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
