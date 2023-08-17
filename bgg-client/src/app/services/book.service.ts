import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookSummary } from '../models';

//const url = 'http://localhost:8080/api/books'
const url = '/api/books'

// like @Service in springboot
@Injectable({
  providedIn: 'root'
})
export class BookService {

  http = inject(HttpClient)

  getBooks(): Observable<BookSummary[]> {
    return this.http.get<BookSummary[]>(url)
      .pipe(
        map( books => {
          return books.map(bk => {
            return {
              bookId: bk.bookId,
              title: bk.title.toUpperCase()
            } as BookSummary
          })
        })
      )
  }
}
