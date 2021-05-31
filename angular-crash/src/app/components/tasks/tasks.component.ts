import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'; //imported Task interface
import {TASKS} from '../../mock-tasks'; //imported list of tasks

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS; //tasks variable gets array of all tasks

  constructor() { }

  ngOnInit(): void {
  }

}
