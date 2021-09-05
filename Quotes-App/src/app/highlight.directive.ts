export class Quote {
  showName:boolean;
  public upvote:number;
  public downvote:number;

  constructor( public id:number, public text:string, public name:string, public completeDate: Date){
        this.showName=false;
        this.upvote=0;
        this.downvote=0;
      }
    }