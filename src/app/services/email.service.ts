import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEmail } from '../shared/email';
import { IStudent } from '../shared/student';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  url = environment.api + '/email';

  headersOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  sendEmail(email: IEmail) {
    return this.httpClient
      .post(this.url, JSON.stringify(email), this.headersOptions)
      .pipe(retry(1), catchError(this.handlerError));
  }
  sendEmailStudent(studentEmail, theme) {
    let email = {
      to: '',
      subject: '',
      message: '',
    };
    email.to = studentEmail;
    email.subject = '[SWOT] - Pedido de orientação';
    email.message =
      'Olá professor, queria saber se podemos conversar sobre o tema:  ' +
      theme +
      ' <p> Att. </p>';
    console.log(email);
    return this.httpClient
      .post<any>(this.url + '/', JSON.stringify(email), this.headersOptions)
      .pipe(retry(1), catchError(this.handlerError));
  }
  sendEmailNewUser(email: any, student: any) {
    email.student = '' + student + '';
    console.log(email);
    return this.httpClient
      .post<any>(this.url + '/new', JSON.stringify(email), this.headersOptions)
      .pipe(retry(2), catchError(this.handlerError));
  }

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
