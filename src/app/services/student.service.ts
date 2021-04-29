import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IStudent } from '../shared/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url = `${environment.api}/student`;

  constructor(private httpClient: HttpClient) {}

  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  index(): Observable<IStudent[]> {
    return this.httpClient
      .get<IStudent[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }
  show(id: number | string): Observable<IStudent> {
    return this.httpClient
      .get<IStudent>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
  searchCpf(cpf: number | string) {
    return this.httpClient
      .get(this.url + '/new/' + cpf)
      .pipe(retry(1), catchError(this.handleError));
  }
  create(student: any): Observable<IStudent> {
    return this.httpClient
      .post<IStudent>(this.url, JSON.stringify(student), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  update(student: IStudent): Observable<IStudent> {
    return this.httpClient
      .put<IStudent>(
        this.url + '/' + student.id,
        JSON.stringify(student),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  destroy(id: number | string): Observable<IStudent> {
    return this.httpClient
      .delete<IStudent>(this.url + '/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
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
