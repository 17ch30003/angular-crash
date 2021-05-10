import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL='http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(`${this.apiURL}/${task.id}`);
  }
}
