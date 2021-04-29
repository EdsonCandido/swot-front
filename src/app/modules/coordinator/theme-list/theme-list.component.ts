import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { ITheme } from 'src/app/shared/theme';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent implements OnInit {
  listTheme$: Observable<ITheme[]>;
  filter = new FormControl('');
  constructor(
    private themeService: ThemeService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.listTheme$ = this.themeService.index();
  }
  open(describe: string, theme: string) {
    let modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.name = describe;
    modalRef.componentInstance.title = theme;
  }
}
