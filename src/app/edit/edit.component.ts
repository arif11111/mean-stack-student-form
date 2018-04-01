import { Component, OnInit } from '@angular/core';

import { StudService } from '../stud.service'
import { Student } from '../student'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  


  radioItems = 'male female '.split(' ');
  model = { gender: 'male' };

  

  
  constructor(
     public studService:StudService,
     public route:ActivatedRoute,
     public router:Router
  ) { }
  

  ngOnInit() {
  this.getStudent();
    
  }
    
  model = new Student();
  id = this.route.snapshot.params['id'];

  radioItems = 'Male Female'.split(' ');
  model = { gender: 'Male' };
  
  getStudent(){
    this.studService.getStudent(this.id);
        this.subscribe(student=>{
          this.model = student;
        })
  }

  updateStudent(){
    this.studService.updateStudent(this.id,this.model)
        .subscribe(()=> this.goBack())
  }

   goBack(){
    this.router.navigate(['/home'])
  }
}
