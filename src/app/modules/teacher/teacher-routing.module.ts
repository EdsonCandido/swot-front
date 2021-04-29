import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorComponent } from './advisor/advisor.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherComponent } from './teacher.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      { path: 'themes', component: ThemeListComponent },
      { path: 'students', component: StudentListComponent },
      { path: 'new', component: ThemeFormComponent },
      { path: 'edit', component: ThemeDetailsComponent },
      { path: 'advisor', component: AdvisorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
