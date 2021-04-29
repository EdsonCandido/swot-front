import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: 'posts', component: ThemeListComponent },
      { path: 'teachers', component: TeacherListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
