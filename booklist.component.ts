// import { Component } from '@angular/core';
// import {BookService} from './service/book-list.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './booklist.component.html',
//   styleUrls: ['./booklist.component.scss'],
// })
// export class BooklistComponent {
//   title = 'BookList';
//   books: any;
// constructor(private bookService: BookService){
//  bookService.makeRequest().subscribe((data)=>{
//   console.log(data);
//   this.books = data
//  });
// }
// searchBooks() {
//   // Filter books by bookName using the searchTerm
//   if (this.searchTerm.trim() !== '') {
//     this.books.result = this.books.result.filter((book: any) =>
//       book.bookName.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   } else {
//     // If search term is empty, reset the books list
//     this.bookService.makeRequest().subscribe((data) => {
//       this.books = data;
//     });
//   }

// }
// sortBooks(event: any) {
//   const sortBy = event.target.value;
//   switch (sortBy) {
//     case 'Price:Lowtohigh':
//       this.books.result.sort((a, b) => a.discountPrice - b.discountPrice);
//       break;
//     case 'Price:Hightolow':
//       this.books.result.sort((a, b) => b.discountPrice - a.discountPrice);
//       break;
//     case 'NewestArrivals':
//       // Implement sorting based on newest arrivals if needed
//       break;
//     default:
//       // Default sorting by relevance
//       // You may implement this based on your logic
//       break;
//   }
// }
// }
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
searchTerm: string = '';
constructor(private bookService: BookService){
bookService.makeRequest().subscribe((data)=>{
console.log(data);
this.books = data
});
}

searchBooks() {
if (this.searchTerm.trim() !== '') {
this.books.result = this.books.result.filter((book: any) =>
book.bookName.toLowerCase().includes(this.searchTerm.toLowerCase())
);
} else {
this.bookService.makeRequest().subscribe((data) => {
this.books = data;
});
}
}

sortBooks(event: Event) {
const target = event.target as HTMLSelectElement;
const sortBy = target.value;
console.log(sortBy);
switch (sortBy) {
case 'Price:Lowtohigh':
this.books.result.sort((a: any, b: any) => a.discountPrice - b.discountPrice);
break;
case 'Price:Hightolow':
this.books.result.sort((a: any, b: any) => b.discountPrice - a.discountPrice);
break;
case 'NewestArrivals':
// Not possible due to API data limitations
break;
default:
break;
}
}

}