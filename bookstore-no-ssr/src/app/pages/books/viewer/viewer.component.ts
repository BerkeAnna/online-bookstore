import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../shared/services/image.service';
import { BooksService } from '../../../shared/services/books.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() categoryInput: any;
  imageUrl?: string;
  bookId!: string;
  book: any[] = []; 

  constructor(
    private router: Router, 
    private imageService: ImageService,   
    private route: ActivatedRoute,
    private bookService: BooksService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bookService.getBookById(this.categoryInput.id).subscribe(book => {
        this.book = book;
        this.loadImage();
        console.log(this.book);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryInput']) {
      this.route.queryParams.subscribe(params => {
        this.bookService.getBookById(this.categoryInput.id).subscribe(book => {
          this.book = book;
          this.loadImage();
          console.log(this.book);
        });
      });
    }
  }

  loadImage(): void {
    if (this.categoryInput && this.categoryInput.id) {
      this.imageService.getImage(`images/${this.categoryInput.id}.jpg`).subscribe(url => {
        console.log('id:' + this.categoryInput.id);
        this.imageUrl = url;
      });
    }
  }

  viewMore(book: any) {
    console.log('books' + book.category)
    this.router.navigate(['/book-page'], { 
      queryParams: {
        id: book.id, 
        title: book.title, 
        author: book.author, 
        price: book.price,
        year: book.year,
        publisher: book.publisher,
        content: book.content
      }
    });
  }
}
