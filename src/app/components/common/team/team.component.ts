import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

    constructor(
        public router: Router
	) { }

    ngOnInit(): void {}

    teamSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 30,
		center: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 3
			},
			768: {
				items: 3
			},
			992: {
				items: 5
			},
			1200: {
				items: 5
			}
		}
    }

}