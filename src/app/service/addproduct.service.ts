import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addproduct } from '../model/addproduct';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:6565/addp";
   }
   getAll() : Observable<Addproduct []>{
    return this.httpClient.get<Addproduct []>(this.baseUrl);
   }
   getById(id:number) : Observable<Addproduct >{ 
    return this.httpClient.get<Addproduct>(`${this.baseUrl}/${id}`);
   }
   add(id:Addproduct) : Observable<Addproduct >{
     return this.httpClient.post<Addproduct >(this.baseUrl,id);
   }
}
