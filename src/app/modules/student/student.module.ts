import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StudentRoutingModule } from './student-routing.module';

import { StudentComponent } from './student.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { ThemeService } from 'src/app/services/theme.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { EmailService } from 'src/app/services/email.service';

@NgModule({
  declarations: [
    StudentComponent,
    TeacherListComponent,
    ThemeListComponent,
    ModalComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
  ],
  providers: [ThemeService, TeacherService, EmailService],
})
export class StudentModule {}
