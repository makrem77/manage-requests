import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../requests/model/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private items: string[] = [];

  constructor(private http: HttpClient) { }

  save(request : Request) {
    return this.http.post("http://localhost:3000/requests",request)
  }

  getAll() {
    return this.http.get<Request[]>("http://localhost:3000/requests")
  }
  delete(requestId: string) {
    return this.http.delete(`http://localhost:3000/requests/${requestId}`);
  }
  updateRequest(requestId: string, reply: string, isReplied: boolean) {
    const updateData = { reply: reply, isReplied: isReplied };
    return this.http.put(`http://localhost:3000/requests/${requestId}`, updateData);
  }


}