import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User} from '../../models/user.model'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  users: User[];

  id:Number; 
  email:string; 
  password:string;
  name:string;

  constructor(private router:Router, private userservice: UserService) { }

  ngOnInit() {
    this.id=parseInt(localStorage.getItem('user_id'));
    this.getUserById(this.id);
  }


  onEditClick(){
    let user = {id:this.id,email:this.email,password:this.password,name:this.name};
    this.userservice.updateUser(user).subscribe(data=>{
    alert(data);
  })
  }

onBackClick(){
  this.router.navigate(["user/show"]);
}
onDeleteClick(){
this.userservice.deleteUser(this.id).subscribe(data=>{
  alert(data);
})
  this.router.navigate(["user/show"]);
}

getUserById(id){
  this.userservice.getUserById(id).subscribe(data =>{
    var name=data[0];
    this.id=name.id;
    this.email=name.email;
    this.name=name.name;
    this.password=name.password;
  })
}

  goToFiles(){
    this.router.navigate(['file/show']);
  }
}
