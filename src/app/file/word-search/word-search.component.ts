import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToUsers(){
    this.router.navigate(['user/show']);
  }
}
