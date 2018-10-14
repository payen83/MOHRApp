import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsEmployerPageRoutingModule } from './tabs-employer.router.module';

import { TabsEmployerPage } from './tabs-employer.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { ProfilePageModule } from '../profile/profile.module';
import { LoginPageModule } from '../login/login.module';
import { EmployerDashboardPageModule } from '../employer-dashboard/employer-dashboard.module';
import { EmployerStaffPageModule } from '../employer-staff/employer-staff.module';
import { EmployerPaymentPageModule } from '../employer-payment/employer-payment.module';
import { EmployerAccountPageModule } from '../employer-account/employer-account.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsEmployerPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    ProfilePageModule,
    LoginPageModule,
    EmployerDashboardPageModule,
    EmployerStaffPageModule,
    EmployerPaymentPageModule,
    EmployerAccountPageModule
  ],
  exports: [RouterModule],
  declarations: [TabsEmployerPage]
})
export class TabsEmployerPageModule {}
