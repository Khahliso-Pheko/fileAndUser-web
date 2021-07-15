import { Component, OnInit } from '@angular/core';
import { FileManagementService } from '../../services/file-management.service';
import { Router } from "@angular/router";
import { File } from '../../models/file.model';

@Component({
  selector: 'app-showfile-by-id',
  templateUrl: './showfile-by-id.component.html',
  styleUrls: ['./showfile-by-id.component.css']
})
export class ShowfileByIdComponent implements OnInit {

  file: File[];
  fileName:string;
  name:string;
  size:Number;
  created_at:Date;


  constructor(private fileManagementService: FileManagementService, private router:Router) { }

  ngOnInit() {
    this.fileName = localStorage.getItem('fileName');
    this.fileManagementService.getFileByName(this.fileName).subscribe(data=>{
      
    var dataarray=data[0];
    this.name=dataarray.name;
    this.size=dataarray.size;
    this.created_at=dataarray.created_at;
    console.log(dataarray);
    

    });
  }

  onRemoveClick(){
    this.fileManagementService.remove(this.fileName);
    this.router.navigate(['file/show']);
  }
  onBackClick(){
    this.router.navigate(['file/show']);
  }
}
