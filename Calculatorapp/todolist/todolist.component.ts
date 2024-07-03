import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  taskTitle:string = "";
  taskdate:Date = new Date();

  alltask:task[]=[];

  errorMessage:string = "";
  create_Task() {
    if (this.taskTitle.trim() === '') {
      this.errorMessage = "Todo text cannot be empty";
      return;
    }
    let newtask:task = {
      id:this.getrandomtaskid(),
      title:this.taskTitle,
      date:this.taskdate
      
    };
    this.alltask.push(newtask);
    this.taskTitle = "";
    this.taskdate = new Date();
    console.log(this.alltask);
  
  } getrandomtaskid():string
  {
    const characterset="abcdefghijklmnopqrstuvwxyz0123456789"
    let result:string = "";
    for(let i=0;i<5;i++)
      {
        result= result + characterset.charAt(Math.floor(Math.random()*characterset.length));
      }
    
    return result;
  }
  delete_Task(index:number)
  {
    this.alltask.splice(index,1);
  }
}

interface task
{
  id:string;
  title:string;
  date:Date;
}

//end{code}