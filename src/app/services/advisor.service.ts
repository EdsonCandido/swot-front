import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAdvisor } from '../shared/advisor';

@Injectable({
  providedIn: 'root',
})
export class AdvisorService {
  private url = environment.api + '/advisor';

  constructor(private httpClient: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  index(): Observable<IAdvisor[]> {
    return this.httpClient
      .get<IAdvisor[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }
  create(
    status: string,
    teacher: string | number,
    student: string | number,
    theme: string | number
  ) {
    return this.httpClient
      .post(
        this.url,
        JSON.stringify({ status, teacher, student, theme }),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  //Tratamentos de erros
  private handleError(error: HttpErrorResponse) {
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
