
/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 22 June 2021
 * Modified by: Eunice Lim
 * Description: Service class for book objects
 */


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from "rxjs/operators";
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780763695804',
        title: 'Wheres Waldo: The Totally Essential Travel Collection',
        description: 'All seven sensational Wheres Waldo books in one!',
        numOfPages:172,
        authors:['Martin Handford']
      },
      {
        isbn: '‎9781536213072',
        title: 'Wheres Waldo: The Great Picture Hunt! ',
        description: 'Every picture tells a story! A classic Waldo adventure enjoys a refreshed cover.',
        numOfPages:24,
        authors:['Martin Handford']
      },
      {
        isbn: '9781536211580',
        title: 'Wheres Waldo? Spooky Spotlight Search',
        description: 'It’s pitch dark on the way to Odlaw’s haunted castle — but Waldo-seekers have a cool wand to light the way in a book perfect for the spooky season.',
        numOfPages:16,
        authors:['Martin Handford']
      },
      {
        isbn: '9780763645304',
        title: 'Wheres Wally? The Wonder Book: Deluxe Edition ',
        description: 'Another classic Waldo adventure has received the deluxe treatment!',
        numOfPages:32,
        authors:['Martin Handford']
      },
      {
        isbn: '9780763645304',
        title: 'Wheres Wally? The Fantastic Journey ',
        description: 'Enjoy a refreshed cover on his fantastic adventure — plus two new pages of games and searches!',
        numOfPages:36,
        authors:['Martin Handford']
      }
    ]
  }

  getBooks(): Observable<IBook[]>{
    return of(this.books);
  }

  getBook(isbn:string): IBook {
    for (let book of this.books){
      if (book.isbn === isbn){
        return book;
      }
    }
    return {} as IBook;
  }
}
