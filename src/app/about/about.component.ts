import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.flexslider-about').flexslider({
      animation: "slide",
      directionNav: false,
      slideshow: false
    });
    


  }

}
