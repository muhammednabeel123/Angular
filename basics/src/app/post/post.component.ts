import { Component,Input,Output,EventEmitter,OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy {
 @Input('img') postImg = ''
 @Output() imgSelected = new EventEmitter<string>()

 constructor(){
  console.log("hey there",this.postImg);
  
 }
  ngOnDestroy(): void {
   console.log("d called");
   
  }
 ngOnInit(): void {
   console.log("NOnit",this.postImg);
   
 }

 ngOnChanges(){
  console.log("onchanges Detected()");
  
 }

 ngDoCheck(){
  console.log("on check deteectd");
  
 }

ngAfterContentInit(): void {
  console.log("cInit");
  
}
ngAfterContentChecked(): void {
  console.log('c checked');
  
}
ngAfterViewChecked(): void {
console.log('v chec');
  
}
ngAfterViewInit(): void {
  console.log("v init");
  
}
}
