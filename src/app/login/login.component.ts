import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any = {};
  loginForm: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder,private http:HttpClient) { 
    this.data.email = '';
    this.data.password = '';
    this.data.response = '';
    this.data.output = '';
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }


  onLoginClick(){
    var link = 'http://localhost:3000/login';
    var myData = {email:this.loginForm.value.email,password:this.loginForm.value.password};
    if(this.loginForm.valid){
      this.http.post(link,myData)
      .subscribe(data => {

        if(data['status'] == true){
             this.router.navigate(['main']);
        }

       else{

        alert(data['message']);
      
       }

       }, error => {
        console.log("ooops!");
        });
    }

  }

  OnRegisterClick(){
    this.router.navigate(['user/create']);
  }
  
  
}
