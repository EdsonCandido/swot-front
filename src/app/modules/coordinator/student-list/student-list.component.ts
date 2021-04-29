import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { IStudent } from 'src/app/shared/student';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private studentService: StudentService
  ) {}

  listStudent$: Observable<IStudent[]>;
  filter = new FormControl('');
  showDetails: boolean = false;
  ngOnInit(): void {
    this.listStudent$ = this.studentService.index();
  }
  open(describe: string, theme: string) {
    let modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.name = describe;
    modalRef.componentInstance.title = theme;
  }
}
