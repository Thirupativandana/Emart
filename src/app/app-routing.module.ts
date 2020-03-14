import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';

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
import {KidsWatchesComponent} from './kids-watches/kids-watches.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { NecklaseComponent } from './necklase/necklase.component';
import { RingsComponent } from './rings/rings.component';
import { BagsComponent } from './bags/bags.component';
import { FlatComponent } from './flat/flat.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HeelsComponent } from './heels/heels.component';
import { WomensWatchesComponent } from './womens-watches/womens-watches.component';
import { MensWatchesComponent } from './mens-watches/mens-watches.component';
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { Product1Component } from './product1/product1.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'newuser',component:RegistrationComponent},
    {path:'existinguser',component:LoginComponent},
    {path:'cat',component:CategoryComponent},
    {path: 'prd',component:ProductComponent},
    {path:'ele',component:ElectonicComponent},
    {path:'clth',component:ClothesComponent},
    {path:'gre',component:GroceriesComponent},
    {path:'ac',component:AccessoriesComponent},
    {path:'foot',component:FootwareComponent},
    {path:'wat',component:WatchesComponent},
    {path:'mb',component:MobilesComponent},
    {path:'tv',component:TvComponent},
    {path:'wm',component:WomensComponent},
    {path:'men',component:MensComponent},
    {path:'kid',component:KidsComponent},
    {path:'fr',component:FruitsComponent},
    {path:'ve',component:VegetablesComponent},
    {path:'ne',component:NecklaseComponent},
    {path:'ri',component:RingsComponent},
    {path:'ba',component:BagsComponent},
    {path:'fl',component:FlatComponent},
    {path:'sh',component:ShoesComponent},
    {path:'he',component:HeelsComponent},
    {path:'kd',component:KidsWatchesComponent},
    {path:'wmns',component:WomensWatchesComponent},
    {path:'mens',component:MensWatchesComponent},
    {path:'cart',component:CartComponent},
    {path:'check',component:CheckoutComponent},
    {path:'adc',component:AddCategoryComponent},
    {path:'sup',component:SellerSignupComponent},
    {path:'prdt',component:Product1Component},
    {path:'for',component:ForgetpasswordComponent},
    // {path:'footer',component:FooterComponent},
    {path:'order',component:OrderComponent},
    {path:'addp',component:AddproductComponent},
    {path:'contact',component:ContactComponent}
     
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
