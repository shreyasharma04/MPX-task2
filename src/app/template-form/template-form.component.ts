import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
    user:any={};

  submit()
  {
    alert(JSON.stringify(this.user));
    console.log(this.user);
  }
  }


