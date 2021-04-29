import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ITheme } from '../shared/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  url = environment.api + '/' + 'post';
  constructor(private httpClient: HttpClient) {}
  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  index(): Observable<ITheme[]> {
    return this.httpClient
      .get<ITheme[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }
  show(id: string | number): Observable<ITheme> {
    return this.httpClient
      .get<ITheme>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
  create(theme: ITheme): Observable<ITheme> {
    return this.httpClient
      .post<ITheme>(this.url, theme, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  update(theme: ITheme): Observable<ITheme> {
    return this.httpClient
      .put<ITheme>(
        this.url + '/' + theme.id,
        JSON.stringify(theme),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  //Tratamentos de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Service Student Post - Código do error: ${error.status}, menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
