import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Post } from '../models/post'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class PostService {
  private baseURL = 'http://localhost:3000/api/post'
  constructor (private http: HttpClient) {}

  createPost (newPost: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseURL}/create`, newPost).pipe(catchError(this.handleError))
  }

  getAllPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/get/all`)
  }

  getOnePost (searchId: String): Observable<Post> {
    return this.http.get<Post>(`${this.baseURL}/get/${searchId}`)
  }

  updatePost (updatePost: Post): Observable<Post> {
    return this.http
      .patch<Post>(`${this.baseURL}/update/${updatePost._id}`, updatePost)
      .pipe(catchError(this.handleError))
  }

  deletePost (deleteId: String): Observable<String> {
    return this.http.delete<String>(`${this.baseURL}/delete/${deleteId}`).pipe(catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse) {
    let errMsg = err.error instanceof ErrorEvent ? err.error.message : `${err.status} - ${err.statusText}`
    console.log(errMsg)
    return throwError(errMsg)
  }
}
