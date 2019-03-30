import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {BookListPage} from "../pages/book-list/book-list";
import {LendBookListPage} from "../pages/lend-book-list/lend-book-list";
import {CdListPage} from "../pages/cd-list/cd-list";
import {LendCdListPage} from "../pages/lend-cd-list/lend-cd-list";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {bookService} from "../service/bookService";
import {cdService} from "../service/cdService";

@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    LendBookListPage,
    CdListPage,
    LendCdListPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    LendBookListPage,
    CdListPage,
    LendCdListPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    bookService ,
    cdService
  ]
})
export class AppModule {}
