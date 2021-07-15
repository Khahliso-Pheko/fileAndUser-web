import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { File } from '../models/file.model'

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {

 
  constructor(private http: HttpClient) { }
 
  fileUrl: string = "http://localhost:3000/files";

  getAllFiles(){
    return this.http.get<File[]>(this.fileUrl);

  }
  public upload(fileName: string, fileContent: string, FileSize: string, UploadDate: Date): void {
    this.http.put(this.fileUrl, {name: fileName, content: fileContent, filesize: FileSize, uploadDate: UploadDate})
    .subscribe(res => {
    });
  }
 
 
  public remove(fileName:string): void {
    this.http.delete(this. fileUrl + '/' + fileName).subscribe(() => {
    });
  }

  getFileByName(name: string){
    return this.http.get<File[]>(this. fileUrl + '/' + name);
  }
 
}
