import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

		// Load Flexslider when everything is loaded.
    $('.flexslider-404').flexslider({
      controlNav: false,
      directionNav: false,
      slideshow: false
    });    

  }

}
