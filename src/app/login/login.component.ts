// https://shafna07.github.io/angular_bank/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  data="Your Perfect Banking Partner"
  data1="enter your account number"

  //acno=""
  // or
  
  // userDetails:any={
  //   1000:{Username:"lulu",acno:1000,password:"abc121",balance:0},
  //   1001:{Username:"anu",acno:1001,password:"abc122",balance:0},
  //   1002:{Username:"amal",acno:1002,password:"abc123",balance:0},
  //   1003:{Username:"shaf",acno:1003,password:"abc124",balance:0},
  //   1004:{Username:"ish",acno:1004,password:"abc125",balance:0}
  // }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder)
  { }
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  //model


  ngOnInit(): void {
    
  }

  //methods

  login() 
  {
    var acno=this.loginForm.value.acno
    
    var psw = this.loginForm.value.psw

    if(this.loginForm.valid)
    {

      this.ds.login(acno,psw).subscribe((result:any)=>{

        localStorage.setItem("currentUser",result.currentUser)
        localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
        localStorage.setItem("token",JSON.stringify(result.token))


        alert(result.message)
        this.router.navigateByUrl("dashboard")
      },
      result=>{
        alert(result.error.message)
      })
    
    }

    else{

      alert('invalid form')
    }
   
  }
}

//   login()
//   {
//     var acnum=this.acno
//      var psw=this.psw
//     var userDetails=this.ds.userDetails
//     //alert ('login worked')
//     if (acnum in userDetails)
//     {
//       if(psw==userDetails[acnum]["password"])
//       {
//         alert('login success')
//         //redirection
//         this.router.navigateByUrl("dashboard")

//       }
//       else{
//         alert('incorrect password')
//       }
//     }
//     else{
//       alert('incorrect acnum')
//     }
    
//   }

// //   acnoChange(event:any)
// //   {
// // console.log(this.acno);
// //   this.acno=event.target.value
  
// //   }

// //   passChange(event:any)
// //   {
// //   console.log(this.psw);
// //   this.psw=event.target.value
  
// //   }


// // login(acnum:any,psw:any)
// //   {
// //     var acnum=acnum.value
// //     var psw=psw.value
// //     var userDetails=this.userDetails
// //     //alert ('login worked')
// //     if (acnum in userDetails)
// //     {
// //       if(psw==userDetails[acnum]["password"])
// //       {
// //         alert('login success')
// //       }
// //       else{
// //         alert('incorrect password')
// //       }
// //     }
// //     else{
// //       alert('incorrect acnum')
// //     }
    
// //   }
// }
