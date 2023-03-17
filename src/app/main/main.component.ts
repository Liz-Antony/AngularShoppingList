import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   shoppingItem;
   shoppingList:string[]=[];
   
   

  constructor() {
    this.shoppingList=["eggs","milk","bread"];
    this.shoppingItem="";
   }
   addItem(shoppingItem:string)
   {
     this.shoppingList.push(shoppingItem);
   }
   clearItem(){this.shoppingItem='';}
   clearList(){this.shoppingList=[];}
   changeColor(){return this.shoppingList.length>3?'red':'blue';}
 

  ngOnInit(): void {
  }

}
