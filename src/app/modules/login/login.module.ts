import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';

import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentService } from 'src/app/services/student.service';
import { EmailService } from 'src/app/services/email.service';

@NgModule({
  declarations: [
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    CoordinatorComponent,
    ToastComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  providers: [LoginService, ToastService, StudentService, EmailService],
})
export class LoginModule {}
