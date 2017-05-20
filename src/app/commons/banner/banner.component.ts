import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		// Load Flexslider when everything is loaded.
    $('.flexslider-banner').flexslider({
      controlNav: false
    });    
  }

}
