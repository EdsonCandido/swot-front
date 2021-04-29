import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ModalComponent } from './components/modal/modal.component';
import { ThemeService } from 'src/app/services/theme.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { StudentService } from 'src/app/services/student.service';
import { AdvisorComponent } from './advisor/advisor.component';
import { EmailService } from 'src/app/services/email.service';
import { AdvisorService } from 'src/app/services/advisor.service';

@NgModule({
  declarations: [
    TeacherComponent,
    ThemeListComponent,
    StudentListComponent,
    ThemeFormComponent,
    ThemeDetailsComponent,
    ModalComponent,
    AdvisorComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeacherRoutingModule,
  ],
  providers: [
    ThemeService,
    TeacherService,
    StudentService,
    EmailService,
    AdvisorService,
  ],
})
export class TeacherModule {}
