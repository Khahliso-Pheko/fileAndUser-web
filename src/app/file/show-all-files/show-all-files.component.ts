import { Component, OnInit } from '@angular/core';
import { FileManagementService } from '../../services/file-management.service';
import { Router } from "@angular/router";
import { File } from "../../models/file.model";
@Component({
  selector: 'app-show-all-files',
  templateUrl: './show-all-files.component.html',
  styleUrls: ['./show-all-files.component.css']
})
export class ShowAllFilesComponent implements OnInit {
  files: File[];
  
  constructor(private fileManagementService: FileManagementService, private router:Router) { }
  

  ngOnInit() {
    this.getAllFiles();
  }

  getAllFiles(){
    this.fileManagementService.getAllFiles().subscribe(data=>{
      this.files= data;
      
    });
  }

  onShowClick(fileName: string){
    localStorage.setItem('fileName',fileName);
    this.router.navigate(["file/show/filename"]);
  }

  goToUsers(){
    this.router.navigate(['user/show']);
  }
  onUploadClick(){
    this.router.navigate(['file/upload']);
  }
}
