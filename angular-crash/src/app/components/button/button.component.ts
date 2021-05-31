import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //@Input() requires Input module
  @Input() text: string | undefined;
  @Input() color: string | undefined;

  //undefined type is needed because no value is assigned upon declaration or in constructor
  //@Input() takes a value for a variable of the name following from a HTML element tag in this component

  //@Output requires Output module; @EventEmitter() requires EventEmitter module
  @Output() btnClick = new EventEmitter();

  //EventEmitters cause an event with the same name to happen
  
  constructor() { }

  ngOnInit(): void {
  }

  //method for when button is clicked
  onClick() {
    this.btnClick.emit();
    //triggers event (btnClick) as defined in <app-button> tag in other components
  }

}
