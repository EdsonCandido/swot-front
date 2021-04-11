import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    TeacherComponent,
    ThemeListComponent,
    StudentListComponent,
    ThemeFormComponent,
    ThemeDetailsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
