import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-account',
  templateUrl: './employer-account.page.html',
  styleUrls: ['./employer-account.page.scss'],
})
export class EmployerAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('login');
  }

}
