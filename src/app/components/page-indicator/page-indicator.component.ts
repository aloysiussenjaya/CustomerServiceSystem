import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.css']
})
export class PageIndicatorComponent implements OnInit {
  currentDate = Date.now();
  public currentPage;
  constructor(
    public router: Router
  ) {

    this.currentPage = this.router.url

   }


  ngOnInit(): void {
  }

}
