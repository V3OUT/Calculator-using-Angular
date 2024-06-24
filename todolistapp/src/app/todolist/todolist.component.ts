import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent 
{

  ngOnInit(): void {
    let savedTodolists =localStorage.getItem('alltaskstore');
    this.alltask=savedTodolists?JSON.parse(savedTodolists):[];
  }

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
    localStorage.setItem('alltaskstore',JSON.stringify(this.alltask));
  }

  getrandomtaskid():string
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
    localStorage.setItem('alltaskstore',JSON.stringify(this.alltask));
  }

  edit_Task(index:number)
  {
    this.taskTitle=this.alltask[index].title;
    this.taskdate=this.alltask[index].date;
    this.alltask.splice(index,1);
    localStorage.setItem('alltaskstore',JSON.stringify(this.alltask));
  }
  
}

interface task {
  id: string;
  title: string;
  date: Date;
}