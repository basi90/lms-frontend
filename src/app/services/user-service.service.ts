import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUserProfile(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  updateUserProfile(username: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${username}/edit`, updatedData);
  }

  assignClassToUser(username: string, classId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${username}/edit/class?classId=${classId}`, {});
  }

  // Temporary method
  getAllClasses(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/classes');
  }
}
