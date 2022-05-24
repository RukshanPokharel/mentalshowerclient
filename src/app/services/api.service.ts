/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
//api.service.ts
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { InputClimate } from '../models/inputClimate.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // API path
  base_path = 'https://mentalshower2-api.boti7.com/api/inputClimateNumber';

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Create a new item
  createItem(item): Observable<InputClimate> {
    return this.http
      .post<InputClimate>(
        this.base_path,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get single student data by ID
  getItem(id): Observable<InputClimate> {
    return this.http
      .get<InputClimate>(this.base_path + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get students data
  getList(): Observable<InputClimate> {
    return this.http
      .get<InputClimate>(this.base_path)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update item by id
  updateItem(id, item): Observable<InputClimate> {
    return this.http
      .put<InputClimate>(
        this.base_path + '/' + id,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<InputClimate>(this.base_path + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
