import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  active: any = 1;
  ano = new Date().getFullYear();
  constructor() {}
  ngOnInit(): void {}
}
