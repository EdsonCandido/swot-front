import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { CoordinatorComponent } from './coordinator.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorComponent,
    children: [
      { path: 'themes', component: ThemeListComponent },
      { path: 'students', component: StudentListComponent },
      { path: 'student', component: StudentContactComponent },
      { path: 'new', component: StudentFormComponent },
      { path: 'teachers', component: TeacherListComponent },
      { path: 'advisors', component: AdvisorListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRoutingModule {}
