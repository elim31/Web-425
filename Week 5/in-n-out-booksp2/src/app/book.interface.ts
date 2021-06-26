/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 24 June 2021
 * Description: Book interface
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
