import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../../shared/services/image.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit{

  @Input() categoryInput: any;
  imageUrl?: string;


  constructor(private router: Router, private imageService: ImageService){

  }

  ngOnInit(): void {
    this.loadImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Check if categoryInput has been changed
    if (changes['categoryInput']) {
      this.loadImage();
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
    this.router.navigate(['/book-page'], { queryParams: { id: book.id, title: book.title, author: book.author, price: book.price } });

  }
  

}
