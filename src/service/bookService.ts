import {Book} from "../models/book";

export class bookService {
  bookList : Book[] = [
    {
      title: 'Tatiana',
      date: '2001',
      author: 'Paul simon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
      'consequat.',
      isOn: false
    },
    {
      title: 'Casanava',
      date: '1656',
      author: 'Casanova',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
      'consequat.',
      isOn: true
    },
    {
      title: 'Bel ami',
      date: '1928',
      author: 'Albert Camus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
      'consequat.',
      isOn: false
    }
  ];
}
