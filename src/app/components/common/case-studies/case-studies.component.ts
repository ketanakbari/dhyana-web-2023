import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-case-studies',
    templateUrl: './case-studies.component.html',
    styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

    constructor(
        public router: Router
	) { }

    ngOnInit(): void {}

    caseStudiesSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		]
    }

}