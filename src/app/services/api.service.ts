import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  baseUrl = 'http://localhost:8080/api/heroes';

  constructor(private http: HttpClient) {
  }

  get(url) {
    return this.http.get(this.baseUrl + url);
  }
  post(url, data) {
    return this.http.post(this.baseUrl , data);
  }
  delete(url) {
    return this.http.delete(this.baseUrl + url);
  }
  put(url, data) {
    return this.http.put(this.baseUrl, data);
  }
}
