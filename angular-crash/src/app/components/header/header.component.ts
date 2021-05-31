/*
  component was created through terminal by using command:
  "ng generate component comoponents/header"
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'To-Do List'; //web app's title

  constructor() { }

  //use this when initializing code/for when the component runs
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("Toggle");
  }

}
