import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TeacherService } from 'src/app/services/teacher.service';
import { ITeacher } from 'src/app/shared/teacher';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
})
export class TeacherListComponent implements OnInit {
  constructor(
    private teacherService: TeacherService,
    private modalService: NgbModal
  ) {}

  listTeacher$: Observable<ITeacher[]>;
  filter = new FormControl('');

  ngOnInit(): void {
    this.listTeacher$ = this.teacherService.index();
  }
  open(title: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
  }
}
