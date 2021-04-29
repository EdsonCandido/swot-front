import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css'],
})
export class ThemeDetailsComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {}

  id: number = null;

  post = {
    area: '',
    description: '',
    theme: '',
    period: '',
    owner: { id: this.id },
  };
  onSubmit() {
    try {
      this.themeService.update(this.post).subscribe(() => {
        this.navigate.navigate(['teacher/themes']);
      });
    } catch (error) {}
  }
  ngOnInit(): void {
    this.router.queryParams.subscribe(
      (queryParams) => (this.id = queryParams['id'])
    );
    this.themeService.show(this.id).subscribe((post) => (this.post = post));
  }
}
