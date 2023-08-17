import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookSummary } from '../models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy{

  // @Autowired
  bookSvc = inject(BookService)

  books: BookSummary[] = []

  bkSub$!: Subscription
  bkObs$!: Observable<BookSummary[]>

  ngOnInit(): void {
    this.bkObs$ = this.bookSvc.getBooks()
    // this.bkSub$ = this.booksSvc.getBooks()
    //   .subscribe(
    //     books => {
    //       this.books = books
    //     }
    //   )
  }

  ngOnDestroy(): void {
    console.info('component destroyed')
    // this.bkSub$.unsubscribe()
  }
}
