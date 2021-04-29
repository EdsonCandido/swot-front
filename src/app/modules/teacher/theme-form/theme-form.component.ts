import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.css'],
})
export class ThemeFormComponent implements OnInit {
  post = {
    theme: '',
    description: '',
    area: '',
    period: '',
    owner: { id: 0 },
  };

  constructor(
    private themeService: ThemeService,
    private toastService: ToastService,
    private navigate: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.post.owner.id = parseInt(localStorage.getItem('idteacher'));
    this.themeService.create(this.post).subscribe(() => {
      this.toastService.show('Salvo com sucesso', {
        classname: 'bg-success text-light',
        delay: 1500,
      });
      this.navigate.navigate(['/teacher']);
    });
  }
}
