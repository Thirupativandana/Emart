import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import {ActivatedRoute} from '@angular/router';
import { ElectonicComponent } from './electonic/electonic.component';
import { ClothesComponent } from './clothes/clothes.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FootwareComponent } from './footware/footware.component';
import { WatchesComponent } from './watches/watches.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { WomensComponent } from './womens/womens.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { NecklaseComponent } from './necklase/necklase.component';
import { RingsComponent } from './rings/rings.component';
import { BagsComponent } from './bags/bags.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HeelsComponent } from './heels/heels.component';
import { FlatComponent } from './flat/flat.component';
import { MensWatchesComponent } from './mens-watches/mens-watches.component';
import { WomensWatchesComponent } from './womens-watches/womens-watches.component';
import { KidsWatchesComponent } from './kids-watches/kids-watches.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { Product1Component } from './product1/product1.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({ 
  declarations: [
    AppComponent, 
    LoginComponent,
    RegistrationComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
  
  
    ElectonicComponent,
    ClothesComponent,
    GroceriesComponent,
    AccessoriesComponent,
    FootwareComponent,
    WatchesComponent,
    MobilesComponent,
    TvComponent,
    WomensComponent,
    MensComponent,
    KidsComponent,
    VegetablesComponent,
    FruitsComponent,
    NecklaseComponent,
    RingsComponent,
    BagsComponent,
    ShoesComponent,
    HeelsComponent,
    FlatComponent,
    MensWatchesComponent,
    WomensWatchesComponent,
    KidsWatchesComponent,
    CartComponent,
    CheckoutComponent,
    AddCategoryComponent,
    SellerSignupComponent,
    Product1Component,
    ForgetpasswordComponent,
    // FooterComponent,
    HeaderComponent,
    OrderComponent,
    AddproductComponent,
    ContactComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
