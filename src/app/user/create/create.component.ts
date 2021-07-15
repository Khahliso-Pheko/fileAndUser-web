import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User} from '../../models/user.model'
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  users: User[];

  id:Number; 
  email:string; 
  password:string;
  name:string;
  passcomfirm:string;
  

registerForm  = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
});
  constructor(private router:Router, private userservice: UserService,private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  onCreateClick(){
    console.log(this.registerForm.value);
    let user = {id:0, email:this.registerForm.value.email, password:this.registerForm.value.password, name:this.registerForm.value.name};

    if(this.registerForm.valid){
    this.userservice.adduser(user).subscribe(data=>{
      alert(data);
     this.router.navigate(['user/show']);
    })
  }
 }
  
    onBackClick(){
    this.router.navigate(["user/show"]);
  }

  goToFiles(){
    this.router.navigate(['file/upload']);
  }
}
