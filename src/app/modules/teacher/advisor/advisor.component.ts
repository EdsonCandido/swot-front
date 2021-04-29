import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdvisorService } from 'src/app/services/advisor.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { ThemeService } from 'src/app/services/theme.service';
import { IStudent } from 'src/app/shared/student';
import { ITeacher } from 'src/app/shared/teacher';
import { ITheme } from 'src/app/shared/theme';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.css'],
})
export class AdvisorComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private themeService: ThemeService,
    private advisorService: AdvisorService,
    private router: Router
  ) {}

  listStudent$: Observable<IStudent[]>;
  listTeacher$: Observable<ITeacher[]>;
  listTheme$: Observable<ITheme[]>;

  student: string | number;
  theme: string | number;
  status: string;
  teacher = localStorage.getItem('idteacher');

  ngOnInit(): void {
    this.listStudent$ = this.studentService.index();
    this.listTeacher$ = this.teacherService.index();
    this.listTheme$ = this.themeService.index();
  }

  onSubmit() {
    this.advisorService
      .create(this.status, this.teacher, this.student, this.theme)
      .toPromise();
    alert('Feito com sucesso!');
    this.router.navigate(['/teacher']);
  }
}
