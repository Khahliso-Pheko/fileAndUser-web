import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-file-frequency-distibution',
  templateUrl: './file-frequency-distibution.component.html',
  styleUrls: ['./file-frequency-distibution.component.css']
})
export class FileFrequencyDistibutionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUsers(){
    this.router.navigate(['user/show']);
  }
}
