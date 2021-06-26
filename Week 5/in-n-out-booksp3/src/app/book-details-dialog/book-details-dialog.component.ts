/**
 * Title: book-details-dialog.component
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 24 June 2021
 * Description: Book details dialog (dialog box for displaying the details of a book)
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book=data.book;
  }

  ngOnInit(): void {
  }

}
