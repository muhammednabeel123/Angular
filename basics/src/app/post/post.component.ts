import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Input('img') postImg = ''
 @Output() imgSelected = new EventEmitter<string>()

 constructor(){
  console.log("hey there",this.postImg);
  
 }
 ngOnInit(): void {
   console.log("NOnit",this.postImg);
   
 }
}
