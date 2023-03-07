// https://shafna07.github.io/angular_bank/

import { Component, OnInit } from '@angular/core';

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
  acno:any 
  psw:any

  userDetails:any={
    1000:{Username:"lulu",acno:1000,password:"abc121",balance:0},
    1001:{Username:"anu",acno:1001,password:"abc122",balance:0},
    1002:{Username:"amal",acno:1002,password:"abc123",balance:0},
    1003:{Username:"shaf",acno:1003,password:"abc124",balance:0},
    1004:{Username:"ish",acno:1004,password:"abc125",balance:0}
  }

  constructor()
  {}

  ngOnInit(): void {
    
  }

  //methods

  login()
  {
    var acnum=this.acno
     var psw=this.psw
    var userDetails=this.userDetails
    //alert ('login worked')
    if (acnum in userDetails)
    {
      if(psw==userDetails[acnum]["password"])
      {
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('incorrect acnum')
    }
    
  }

//   acnoChange(event:any)
//   {
// console.log(this.acno);
//   this.acno=event.target.value
  
//   }

//   passChange(event:any)
//   {
//   console.log(this.psw);
//   this.psw=event.target.value
  
//   }


// login(acnum:any,psw:any)
//   {
//     var acnum=acnum.value
//     var psw=psw.value
//     var userDetails=this.userDetails
//     //alert ('login worked')
//     if (acnum in userDetails)
//     {
//       if(psw==userDetails[acnum]["password"])
//       {
//         alert('login success')
//       }
//       else{
//         alert('incorrect password')
//       }
//     }
//     else{
//       alert('incorrect acnum')
//     }
    
//   }
}
