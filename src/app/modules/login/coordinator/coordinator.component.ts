import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css'],
})
export class CoordinatorComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private toastService: ToastService,
    private navigate: Router
  ) {}

  ngOnInit(): void {}
  login = {
    email: '',
    password: '',
  };
  async onSubmit() {
    try {
      const result = await this.loginService.loginCoordinator(this.login);
      localStorage.setItem('token', result.token);
      localStorage.setItem('email', result.email);
      this.navigate.navigate(['coordinator']);
    } catch (err) {
      this.toastService.show('Erro ao realizar login', {
        classname: 'bg-danger text-light',
        delay: 1500,
      });
    }
  }
}
