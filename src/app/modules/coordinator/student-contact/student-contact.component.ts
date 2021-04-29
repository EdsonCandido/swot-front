import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { ToastService } from 'src/app/services/toast.service';
import { IEmail } from 'src/app/shared/email';

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.css'],
})
export class StudentContactComponent implements OnInit {
  constructor(
    private emailService: EmailService,
    private router: Router,
    private toastService: ToastService
  ) {}

  email: IEmail = {
    message: '',
    subject: '',
    to: '',
  };
  onSubmit() {
    this.emailService.sendEmail(this.email).toPromise();
    this.router.navigate(['/coordinator']);
    this.toastService.show('Aluno cadastrado com sucesso!', {
      classname: 'bg-success text-light',
      delay: 1500,
    });
  }

  ngOnInit(): void {}
}
