import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {
  
  // user: User;
  // msg: string;
  // isNew: boolean;


 constructor () { }
  
  ngOnInit()  {

  }





// void {
//     let id = this.actRoute.snapshot.params.id;

//     if (id) {
//       this.isNew = false;
//       this.service.getById(id).subscribe(
//         (data) => {
//           this.user = data;
//         }
//       );
//     } else {
//       this.isNew = true;
//       this.user = {
//         id: 0,
//         username: '',
//         password: ''
        
//       };
//     }
//   }

//   save() {
//     let ob: Observable<User>;

//     if (this.isNew) {
//       ob = this.service.add(this.user);
//     }
//     ob.subscribe(
//       (data) => {
        
//         this.router.navigateByUrl("/cat");
//       },
//       (errResponse) => {
//         this.msg = errResponse.error;

//       }
//     );
//   }
}