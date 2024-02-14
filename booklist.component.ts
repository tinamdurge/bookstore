import { Component } from '@angular/core';
import {BookService} from './service/book-list.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent {
  title = 'BookList';
  books: any;
constructor(private bookService: BookService){
 bookService.makeRequest().subscribe((data)=>{
  console.log(data);
  this.books = data
 });
}
}
