import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  register(body: any) {
    const headers = new Headers();
    let url = 'http://localhost:80/my-details/register.php';
    return this.http.post(url, JSON.stringify(body), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
  }
}
