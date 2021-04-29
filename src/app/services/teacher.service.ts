import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ITeacher } from '../shared/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  url = environment.api + '/' + 'teacher';
  constructor(private httpClient: HttpClient) {}
  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  index(): Observable<ITeacher[]> {
    return this.httpClient
      .get<ITeacher[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }
  show(id: number | string): Observable<ITeacher> {
    return this.httpClient
      .get<ITeacher>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Tratamentos de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do error: ${error.status}, menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
