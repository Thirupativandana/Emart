import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[];
  constructor() {
    this.products = [
      { id: 'p1', name: 'redmi note 8', price: 25000, photo: 'assets/note1.png'},
      { id: 'p2', name: 'Oppo', price: 19500, photo: 'assets/op1.jpg' },
      { id: 'p3', name: 'Mac Laptop', price: 90000, photo: 'assets/lap1.jpg' },
      { id: 'p4', name: 'Dell leptop', price: 45000, photo: 'assets/del2.jpg' },
      { id: 'p5', name: 'LG tv', price: 110000, photo: 'assets/lg1.jpg' },
      { id: 'p6', name: 'Samsung', price: 55000, photo: 'assets/sam1.jpg' },
      { id: 'p7', name: 'Kurthies ', price: 2000, photo: 'assets/clothe1.png' },
      { id: 'p8', name: 'u-necked T-shirts', price: 1000, photo: 'assets/s2.jpg' },
      { id: 'p9', name: 'Frocks ', price: 4500, photo: 'assets/k1.jpg' },
      { id: 'p10', name: 'boys dress ', price: 5500, photo: 'assets/k4.jpg' },
  
      { id: 'p12', name: 'tamoto ', price: 100, photo: 'assets/v2..jpg' },
      { id: 'p13', name: 'Apple', price: 300, photo: 'assets/fr1.jpg' },
      { id: 'p14', name: 'Strawberry', price: 500, photo: 'assets/fr2.jpg' },
      { id: 'p15', name: 'womens belt watch', price: 1500, photo: 'assets/wat3.jpg' },
      { id: 'p16', name: 'womens fastrack watch', price: 2500, photo: 'assets/wat4.jpg' },
      { id: 'p17', name: 'mens fastrack watch', price: 5500, photo: 'assets/wat1.jpg' },
      { id: 'p18', name: 'mens stainless watch', price: 2500, photo: 'assets/wat2.jpg' },
      { id: 'p19', name: 'kids samrt  watch', price: 1500, photo: 'assets/wat5.jpg' },
      { id: 'p20', name: 'Casual Shoes for mens', price: 2500, photo: 'assets/sa1.jpg' },
      { id: 'p20', name: 'Casual Shoes for mens', price: 1500, photo: 'assets/sa2.jpg' },
      { id: 'p21', name: 'Ethnic Heels', price: 5000, photo: 'assets/sa3.jpg' },
      { id: 'p22', name: 'Pin on rylee', price: 1500, photo: 'assets/s4.jpg' },
      { id: 'p23', name: 'Fashion Flat', price: 500, photo: 'assets/s5.jpg' },
      { id: 'p24', name: 'FashionFlat', price: 500, photo: 'assets/s6.jpg' },
      { id: 'p25', name: 'Necklase', price: 3500, photo: 'assets/n1.jpg' },
      { id: 'p26', name: 'Neckalse', price: 5000, photo: 'assets/n2.jpg' },
      { id: 'p27', name: 'Rings', price: 5000, photo: 'assets/r1.jpg' },
     
      { id: 'p28', name: 'finger ring', price: 600, photo: 'assets/r2.jpg' },
      { id: 'p29', name: 'Leather Bag', price: 5000, photo: 'assets/h1.jpg' },
  
   

    ];

}


findAll(): Product[] {
  return this.products;
}

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

public getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}

}


   
  

  

  



