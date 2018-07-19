import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
interface User {
  name: any;
  passWord: any;
}
@Component({
  selector: 'do-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  user = new UserCode({
    name: '',
    passWord: '',
  });
  display: boolean = false;
  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {

  }
  submitThis() {
    this.http.get<any>('./assets/echarts/loginMessage.json')
      .subscribe(
        data => {
          if (this.user.type.passWord === data.result.password && this.user.type.name === data.result.userName) {
            sessionStorage.setItem('use_id', 'true');
            this.router.navigate(['pages/navigation']);
          } else {
            this.display = true;
          }
        },
    );
  }
}
class UserCode {
  constructor(public type: User) {
  }
}

