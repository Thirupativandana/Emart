import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { PaymentService } from '../service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-payment',
  templateUrl: './Checkout.component.html',
  styleUrls: ['./Checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  pay:Payment;
  msg:string;
  isNew:boolean; 

  constructor(
    private paymentService:PaymentService,
    private actRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    
    let pay=this.actRoute.snapshot.params.id;
    if(pay){
      this.isNew=false;
      this.paymentService.getById(pay).subscribe(
        (data)=>{
          this.pay=data;

        }
      );
    } else{
      this.isNew=true;
      this.pay={
        cardCode:0,
        country:'',
        firstName:'',
        lastName:'',
        address:'',
        city:'',
        state:'',
        zipcode:'',
        cardType:'',
        cardNumber:0,
         date:new Date()
     
      };
    }
  }
  save(){
    let ob:Observable<Payment>;

    if(this.isNew){
      ob=this.paymentService.add(this.pay);
    }else{
      ob=this.paymentService.save(this.pay);
    }
    ob.subscribe(
      (data)=>{
        this.router.navigateByUrl("/order");
      },
      (errRespone)=>{
        this.msg=errRespone.error;
        
      }
    );
  }

}

