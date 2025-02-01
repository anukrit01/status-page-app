import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Service {
  id: number;
  name: string;
  status: 'operational' | 'degraded' | 'partial_outage' | 'major_outage';
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = '/api/services';

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  getServiceStatus(serviceId: number): Observable<Service> {
    return this.http.get<Service>(`${this.apiUrl}/${serviceId}`);
  }

  updateServiceStatus(serviceId: number, status: string): Observable<Service> {
    return this.http.patch<Service>(`${this.apiUrl}/${serviceId}/status`, { status });
  }
}