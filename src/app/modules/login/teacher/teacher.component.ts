import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private navigate: Router,
    private toastService: ToastService
  ) {}
  login = {
    email: '',
    password: '',
  };
  async onSubmit() {
    try {
      const result = await this.loginService.loginTeacher(this.login);
      localStorage.setItem('token', result.token);
      localStorage.setItem('idteacher', result.id);
      localStorage.setItem('email', result.email);
      this.navigate.navigate(['teacher']);
    } catch (err) {
      this.toastService.show('Erro ao realizar login', {
        classname: 'bg-danger text-light',
        delay: 1500,
      });
    }
  }

  ngOnInit(): void {}
}
