import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote(1, 'Angular code needs clarity', 'Michael Jackson',new Date(2019,6,9)),
    new Quote(2,'Testing and verifying','Hellen Kyle',new Date(2020,3,14)),
    new Quote(3,'Get new codes and test','Diana Ann',new Date(2022,1,12)),
    new Quote(4,'Welcome to the world of trial and errors','Zacks Zulu',new Date(2019,0,18)),
    new Quote(5,'Solve merge conflict','Damn Math',new Date(2019,2,14)),
   
  ];
  // toggle
  toggleDetails(index){
    this.quotes[index].showName=!this.quotes[index].showName;
  }

  // confirm option
  deleteQuote(deletequoteevent, index){
    if (deletequoteevent) {
      this.quotes.splice(index,1);
    }
  };
  likeQuote(likequoteevent, index){
    if (likequoteevent) {
      this.quotes[index].upvote++;
    }
  };
  dislikeQuote(dislikequoteevent, index){
    if (dislikequoteevent) {
      this.quotes[index].downvote++;
    }
  };

  addNewQuote(Quote){
    let quoteLength = this.quotes.length;
  Quote.id = quoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate)
    this.quotes.push(Quote)
  }

  

    
    
  constructor() { }

  ngOnInit() {
  }

}
