import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.api;
  constructor(private httpClient: HttpClient) {}

  //Headers
  headersOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  async loginStudent(student: any) {
    return this.httpClient
      .post<any>(
        `${this.url}/student/login`,
        JSON.stringify(student),
        this.headersOptions
      )
      .pipe(retry(1), catchError(this.handlerError))
      .toPromise();
  }
  async loginTeacher(teacher: any) {
    return this.httpClient
      .post<any>(
        `${this.url}/teacher/login`,
        JSON.stringify(teacher),
        this.headersOptions
      )
      .pipe(retry(1), catchError(this.handlerError))
      .toPromise();
  }
  async loginCoordinator(coordinator: any) {
    return this.httpClient
      .post<any>(
        `${this.url}/coordinator/login`,
        JSON.stringify(coordinator),
        this.headersOptions
      )
      .pipe(retry(1), catchError(this.handlerError))
      .toPromise();
  }

  //Handler error
  handlerError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
