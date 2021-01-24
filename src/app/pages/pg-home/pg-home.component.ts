import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-home',
  templateUrl: './pg-home.component.html',
  styleUrls: ['./pg-home.component.scss']
})
export class PgHomeComponent implements OnInit {

  // themeForm: FormGroup;

  constructor(
    // private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.themeForm = this.fb.group({
    //   theme: ['auto'],
    // });
    // this.themeForm.valueChanges.subscribe(res => {
    //   console.log(res)
    // })

  }
}
