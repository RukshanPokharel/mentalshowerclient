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

/**
 * Injectable service for making HTTP calls to the API.
 * The provided methods are wrappers for Angular's Httpclient.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * Base path of the API
   *
   * @private
   */
  private base_path = 'http://localhost:8080/api/inputClimateNumber';

  /**
   * Default options used for all HTTP requests
   *
   * @private
   */
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /**
   * Constructor of the API service with dependency injection
   *
   * @param http Angular HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * Handle API errors
   *
   * @param error
   * @private
   */
  private static handleError(error: HttpErrorResponse) {
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

  /**
   * Create a new item
   *
   * @param item
   * @returns The created item
   */
  createItem(item: InputClimate): Observable<InputClimate> {
    return this.http
      .post<InputClimate>(
        this.base_path,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(ApiService.handleError));
  }

  /**
   * Get single student data by ID
   *
   * @param id
   * @returns An item matching the provided ID
   */
  getItem(id: number): Observable<InputClimate> {
    return this.http
      .get<InputClimate>(this.base_path + '/' + id)
      .pipe(retry(2), catchError(ApiService.handleError));
  }

  /**
   * Get students data
   *
   * @returns All items in the database table
   */
  getList(): Observable<InputClimate> {
    return this.http
      .get<InputClimate>(this.base_path)
      .pipe(retry(2), catchError(ApiService.handleError));
  }

  /**
   * Update item by id
   *
   * @param id
   * @param item
   * @returns The updated item
   */
  updateItem(id: number, item: InputClimate): Observable<InputClimate> {
    return this.http
      .put<InputClimate>(
        this.base_path + '/' + id,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(ApiService.handleError));
  }

  /**
   * Delete item by id
   *
   * @param id
   */
  deleteItem(id: number)  {
    return this.http
      .delete<InputClimate>(this.base_path + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(ApiService.handleError));
  }
}
