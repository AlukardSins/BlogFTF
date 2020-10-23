import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Category } from '../models/category'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class CategoryService {
  private baseURL = 'http://localhost:3000/api/category'
  constructor (private http: HttpClient) {}

  createCategory (newCategory: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseURL}/create`, newCategory).pipe(catchError(this.handleError))
  }

  getAllCategorys (): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseURL}/get/all`)
  }

  getOneCategory (searchId: String): Observable<Category> {
    return this.http.get<Category>(`${this.baseURL}/get/${searchId}`)
  }

  updateCategory (updateCategory: Category): Observable<Category> {
    return this.http
      .patch<Category>(`${this.baseURL}/update/${updateCategory._id}`, updateCategory)
      .pipe(catchError(this.handleError))
  }

  deleteCategory (deleteId: String): Observable<String> {
    return this.http.delete<String>(`${this.baseURL}/delete/${deleteId}`).pipe(catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse) {
    let errMsg = err.error instanceof ErrorEvent ? err.error.message : `${err.status} - ${err.statusText}`
    console.log(errMsg)
    return throwError(errMsg)
  }
}
