import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-home',
  templateUrl: './pg-home.component.html',
  styleUrls: ['./pg-home.component.scss']
})
export class PgHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sample() {
    this.router.navigate(['sample123']);
  }

}
