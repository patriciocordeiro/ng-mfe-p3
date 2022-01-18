import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell-app';
  menu = ['home', 'user'];
  activeLink: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
