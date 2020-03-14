import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  save(pay: Payment): Observable<Payment> {
    throw new Error("Method not implemented.");
  }
  baseUrl:string;
 

  constructor(private httpClient: HttpClient) {
    this.baseUrl="http://localhost:5555/payments";
  }
  getAll():Observable<Payment[]>{
   return this.httpClient.get<Payment[]>(this.baseUrl);
    
  }
  getById(pay:number) :Observable<Payment>{
   return this.httpClient.get<Payment>(`${this.baseUrl}/${pay}`);

  }
  add(payment:Payment): Observable<Payment>{
   return this.httpClient.post<Payment>(this.baseUrl,payment);
 }

   }

