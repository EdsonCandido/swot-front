import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { ToastService } from 'src/app/services/toast.service';
import { IEmail } from 'src/app/shared/email';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  constructor(
    private emailService: EmailService,
    private router: Router,
    private toastService: ToastService
  ) {}

  email = {
    to: '',
  };
  cpf: string;
  onSubmit() {
    this.emailService.sendEmailNewUser(this.email, this.cpf).toPromise();
    this.router.navigate(['/coordinator']);
    this.toastService.show('Aluno cadastrado com sucesso!', {
      classname: 'bg-success text-light',
      delay: 1500,
    });
  }
  ngOnInit(): void {}
}
