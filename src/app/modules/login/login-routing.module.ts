import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'access/:cpf', component: StudentFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
