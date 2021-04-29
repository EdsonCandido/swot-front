import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AdvisorService } from 'src/app/services/advisor.service';
import { IAdvisor } from 'src/app/shared/advisor';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-advisor-list',
  templateUrl: './advisor-list.component.html',
  styleUrls: ['./advisor-list.component.css'],
})
export class AdvisorListComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private modalService: NgbModal
  ) {}
  listAdvisor$: Observable<IAdvisor[]>;
  filter = new FormControl('');

  ngOnInit(): void {
    this.listAdvisor$ = this.advisorService.index();
  }
  open(title: string, description: string): void {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.name = description;
  }
}
