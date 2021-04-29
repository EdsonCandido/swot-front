import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  constructor(
    private router: Router,
    private studentService: StudentService,
    private query: ActivatedRoute
  ) {}

  cpf: any;
  login = {
    email: '',
    password: '',
    name: '',
    cpf: '',
  };
  onSubmit() {
    this.studentService.create(this.login).toPromise();
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.query.params.subscribe(
      (queryParams) => (this.cpf = queryParams['cpf'])
    );
    this.studentService
      .searchCpf(this.cpf)
      .toPromise()
      .then((res) => console.log(res))
      .catch((res) => this.router.navigate(['/login']));
  }
}
