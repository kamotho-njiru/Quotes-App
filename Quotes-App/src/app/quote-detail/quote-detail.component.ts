import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import quote blueprint class
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  // property quote to receive data from parent quote component
  @Input() quote: Quote;
  @Output() deletequoteevent = new EventEmitter<Quote>();
  @Output() likequoteevent = new EventEmitter<Quote>();
  @Output() dislikequoteevent = new EventEmitter<Quote>();
      
      //  delete option
  deletequote(quoteToDelete:Quote){
    this.deletequoteevent.emit(quoteToDelete);
  };
        // like option
  likeButtonClick(quoteToLike:Quote) {
    this.likequoteevent.emit(quoteToLike);
  };

    //  dislike option
    dislikeButtonClick(quoteToDislike:Quote) {
      this.dislikequoteevent.emit(quoteToDislike);
    }


  constructor() { }

  ngOnInit() {
  }

}
