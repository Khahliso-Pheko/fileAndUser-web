import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User} from '../../models/user.model'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  users: User[];

  constructor(private router:Router, private userservice: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers(){
    this.userservice.getAllUsers().subscribe(data=>{
      this.users= data;
      
    });
}

onShowClick(id){
  localStorage.setItem('user_id',id);
  this.router.navigate(["user/show/id"]);
}
onEditClick(id){
  localStorage.setItem('user_id',id);
  this.router.navigate(["user/update"]);
}
onCreateClick(){
  this.router.navigate(["user/create"]);
}

goToFiles(){
  this.router.navigate(['file/show']);
}
}
