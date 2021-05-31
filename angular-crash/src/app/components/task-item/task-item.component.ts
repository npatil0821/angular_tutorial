import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task' //Task interface imported
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //icon for delete button imported

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  //definite assignment assertion (!) has to be added, otherwise code won't compile
  //gets task object passed to <app-task-item> tag in other components

  faTimes = faTimes; //varible is assigned faTimes icon object

  constructor() { }

  ngOnInit(): void {
  }

}
