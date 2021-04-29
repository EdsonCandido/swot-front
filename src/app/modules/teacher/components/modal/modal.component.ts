import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() obj: any;

  constructor(
    public activeModal: NgbActiveModal,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}
  sendEmail() {}
}
