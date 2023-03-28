import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
 router:any
 
  constructor(private ds: DataService, router:Router,private fb:FormBuilder) { }

  //model for register form


  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }


  register() 
  {
    var acno=this.registerForm.value.acno
    var uname=this.registerForm.value.uname
    var psw = this.registerForm.value.psw
    if(this.registerForm.valid)
    {
      const result = this.ds.register(acno,uname,psw)
    if (result)
    {
      alert('registered')
      this.router.navigateByurl(" ")
    }
    else
    {
      alert('user already present')
    }

    }

    else{

      alert('invalid form')
    }
   
  }
}
