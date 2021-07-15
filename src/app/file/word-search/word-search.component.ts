import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FileManagementService } from 'src/app/services/file-management.service';
import { File } from 'src/app/models/file.model';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {

  files:string[];
  checkifsearchclicked=false;
  searchWord:string;
  counts:number[];
  constructor(private router:Router,private fileManagementService:FileManagementService) { }

  ngOnInit() {
    
  }

  goToUsers(){
    this.router.navigate(['user/show']);
  }

  getAllFilesAndFileData(word:string){
    this.fileManagementService.searchForWord(word).subscribe(data=>{
    
    if(data['fileArray'].length<=0 && data['wordCountArray'].length<=0){
      alert("no match found");
      this.files=[];
      this.counts=[];

    }else{
    this.files=data['fileArray'];
    this.counts=data['wordCountArray'];
    }
    })
  }



  onSearchClick(){
    this.checkifsearchclicked = true;
    this.getAllFilesAndFileData(this.searchWord);
  }
}
