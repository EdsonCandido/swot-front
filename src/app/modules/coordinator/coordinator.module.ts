import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { CoordinatorComponent } from './coordinator.component';
import { ThemeService } from 'src/app/services/theme.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { StudentService } from 'src/app/services/student.service';
import { ModalComponent } from './components/modal/modal.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';

@NgModule({
  declarations: [
    CoordinatorComponent,
    ModalComponent,
    StudentListComponent,
    TeacherListComponent,
    ThemeListComponent,
    AdvisorListComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoordinatorRoutingModule,
  ],
  providers: [ThemeService, TeacherService, StudentService],
})
export class CoordinatorModule {}
