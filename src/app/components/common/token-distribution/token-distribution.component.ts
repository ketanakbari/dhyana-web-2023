import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-token-distribution',
    templateUrl: './token-distribution.component.html',
    styleUrls: ['./token-distribution.component.scss']
})
export class TokenDistributionComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}