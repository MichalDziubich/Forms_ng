import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.httpClient.get(this.postUrl);
  }
}
