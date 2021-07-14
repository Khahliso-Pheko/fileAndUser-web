import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User} from '../../models/user.model'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-by-id',
  templateUrl: './show-by-id.component.html',
  styleUrls: ['./show-by-id.component.css']
})
export class ShowByIdComponent implements OnInit {

  users: User[];

  id:Number; 
  email:string; 
  password:string;
  name:string;

  constructor(private router:Router, private userservice: UserService) { }

  ngOnInit() {
    this.id=parseInt(localStorage.getItem('user_id'));
    this.userservice.getUserById(this.id).subscribe(data=>{
    var name=data[0];
    this.id=name.id;
    this.email=name.email;
    this.name=name.name;
    });
  }
  onEditClick(){
    localStorage.setItem('clientuser_id',this.id.toString());
    localStorage.setItem('clientuser_name',this.name);
    localStorage.setItem('clientuser_email',this.email);
    localStorage.setItem('clientuser_password',this.password);
    this.router.navigate(["user/edit"]);
    this.router.navigate(["user/edit"]);
}
onBackClick(){
  this.router.navigate(["user/show"]);
}

goToFiles(){
  this.router.navigate(['file/show']);
}
}
