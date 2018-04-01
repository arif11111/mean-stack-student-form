import { Component, OnInit } from '@angular/core';

import { StudService } from '../stud.service'
import { Student } from '../student'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    radioItems = 'male female '.split(' ');
  model = { gender: 'female' };



  constructor(
     public studService:StudService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  model = new Student();
  addStudent(){
    this.studService.addStudent(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/home'])
  }
}
