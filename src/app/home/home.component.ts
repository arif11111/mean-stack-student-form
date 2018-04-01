import { Component, OnInit } from '@angular/core';

import { StudService } from '../stud.service'
import { Student } from '../student'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public studService:StudService
  ) { }

  ngOnInit() {
    this.getStudents();
  }
  students:Student;
  getStudents(){
    this.studService.getStudents()
        .subscribe(students=>{
          this.students = students;
        })
  }
  deleteStudent(id){
    this.studService.deleteStudent(id)
      .subscribe(()=>{
        this.getStudents();
      });
  }
}