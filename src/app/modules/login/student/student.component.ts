import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastService: ToastService
  ) {}

  login = {
    email: '',
    password: '',
  };
  async onSubmit() {
    try {
      const result = await this.loginService.loginStudent(this.login);
      localStorage.setItem('token', result.token);
      localStorage.setItem('email', result.email);
      this.router.navigate(['student']);
    } catch (err) {
      this.toastService.show('Erro ao realizar login', {
        classname: 'bg-danger text-light',
        delay: 1500,
      });
    }
  }

  ngOnInit(): void {}
}
