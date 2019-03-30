export class Book {
  title: string;
  author: string;
  date: string;
  description: string;
  isOn: boolean;

  constructor(title: string) {
    this.title = title;
    this.isOn = false;
  }
}
