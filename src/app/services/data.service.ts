import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
 // userDetails:any

    userDetails:any={
    1000:{Username:"lulu",acno:1000,password:"abc121",balance:0,transaction:[]},
    1001:{Username:"anu",acno:1001,password:"abc122",balance:0,transaction:[]},
    1002:{Username:"amal",acno:1002,password:"abc123",balance:0,transaction:[]},
    1003:{Username:"shaf",acno:1003,password:"abc124",balance:0,transaction:[]},
    1004:{Username:"ish",acno:1004,password:"abc125",balance:0,transaction:[]}
   }

  constructor() {
    this.getDetails
  }

  //method creating for local storage


  saveDetails()
  {
    if(this.userDetails)
    {
      localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
    }

    if(this.currentUser)
    {
      localStorage.setItem("currentUser",this.currentUser)

    }
    if(this.currentAcno)
    {
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }

  getDetails()
  {
    if(localStorage.getItem("userDetails"))
    {
      this.userDetails=JSON.parse(localStorage.getItem("userDetails") || "")
    }
    if(localStorage.getItem("currentUser"))
    {
      this.currentUser=localStorage.getItem("currentUser")

    }
    if(localStorage.getItem("currentAcno"))
    {
      this.currentAcno= JSON.parse(localStorage.getItem("currentAcno") || "")
    }

  }


  register(acno:any,uname:any,psw:any)
  
  {
    
    var userDetails=this.userDetails
    if(acno in this.userDetails)
    {
      return false
    }

    else
    {
       userDetails[acno]={Username:uname,acno,password:psw,balance:0,transaction:[]}
      /// console.log(userDetails);

      this.saveDetails()
       
       return true
    }
  }
  login(acno:any,psw:any)
  {
    var userDetails=this.userDetails
    if(acno in userDetails)
    {
      if (psw==userDetails[acno]["password"])
      {

        //store current usr
       this.currentUser= userDetails[acno]["Username"]
       this.currentAcno= acno

       this.saveDetails()

        return true
      }
      else{
        return false
      }
    }
    else
    {
      return false
    }
  }

  deposit(acno:any,psw:any,amnt:any)
  {
    //to convert string amnt to int
    var amount=parseInt(amnt)
    var userDetails=this.userDetails

    if(acno in userDetails)
    {
      if (psw==userDetails[acno]["password"])
      {
         userDetails[acno]["balance"]+=amount
           console.log(userDetails);
           

           // add transaction data

           userDetails[acno]["transaction"].push( { Type:"Credit",Amount:amount})

           this.saveDetails

         return userDetails[acno]["balance"]
      }
      else
      {
        return false
      }
    }
    else
    {
      return false
    }
  }


  withdraw(acno1:any,psw1:any,amnt1:any)
  {
    //to convert string amnt to int
    var amount=parseInt(amnt1)
    var userDetails=this.userDetails

    if(acno1 in userDetails)
    {
      if (psw1==userDetails[acno1]["password"])
      {

        if(amnt1<=userDetails[acno1]["balance"])
        {
          userDetails[acno1]["balance"]-=amount
          console.log(userDetails);

           // add transaction data

           userDetails[acno1]["transaction"].push({Type:"Debit",Amount:amount })
         console.log(userDetails);

         this.saveDetails()
         
        return userDetails[acno1]["balance"]

        }
        else{
          alert('insufficient balance')
        }
        
      }
      else
      {
        return false
      }
    }
    else
    {
      return false
    }
  }


  getTransaction(acno:any)
  {
    return this.userDetails[acno].transaction
  }

}
