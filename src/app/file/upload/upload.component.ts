import { Component, OnInit } from '@angular/core';
import { FileManagementService } from '../../services/file-management.service';
import { FormBuilder, Validators ,FormGroup, FormControl,} from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
 
  private fileName;
  private uploadDate = new Date();
  private fileSize;
 
  constructor(private fb: FormBuilder, private fileManagementService: FileManagementService, private router:Router) { }

  ngOnInit(){}

  public onFileChange(event) {
    const reader = new FileReader();
 
    if (event.target.files && event.target.files.length) {
      if(event.target.files[0].name.match(/\.(txt)$/)){
      this.fileName = event.target.files[0].name;
      this.fileSize = event.target.files[0].size;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };
    }
    }
  }
 
  public onSubmit(): void {
    this.fileManagementService.upload(this.fileName, this.formGroup.get('file').value, this.fileSize, this.uploadDate);
    this.router.navigate(['file/show']);
  }

  goToUsers(){
    this.router.navigate(['user/show']);
  }
}
