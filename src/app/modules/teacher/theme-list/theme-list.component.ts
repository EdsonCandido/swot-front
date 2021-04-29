import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';
import { ITheme } from 'src/app/shared/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent implements OnInit {
  constructor(
    private navigate: Router,
    private themeService: ThemeService,
    private router: ActivatedRoute
  ) {}

  listPost$: Observable<ITheme[]>;
  filter = new FormControl('');
  showDetails: boolean = false;
  ngOnInit(): void {
    this.listPost$ = this.themeService.index();
  }
  edit(post) {
    this.navigate.navigate(['../edit'], {
      relativeTo: this.router,
      queryParams: { id: post.id },
    });
  }
}
