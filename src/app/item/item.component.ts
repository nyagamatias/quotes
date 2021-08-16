import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Sometimes you have to be your own hero','Kalash Kata','Matias Nyaga', new Date(2021,5,2)),
    new Quotes('It was all a dream','Biggie Smalls','Sam Gift', new Date(2020,6,21))
    
  ]
  // vote: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
    // this.vote += this.vote;
    
  }
  deleteGoal(index){
    this.quotes.splice(index,1)
  }
  addNewGoal(quote){
  quote.creationDate = new Date()
  this.quotes.push(quote)
  console.log(this.quotes)
  }
}
