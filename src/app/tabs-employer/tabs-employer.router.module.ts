import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsEmployerPage } from './tabs-employer.page';
import { HomePage } from '../home/home.page';
// import { AboutPage } from '../about/about.page';
import { ProfilePage } from '../profile/profile.page';
import { LoginPage } from '../login/login.page';
import { EmployerDashboardPage } from '../employer-dashboard/employer-dashboard.page';
import { EmployerStaffPage } from '../employer-staff/employer-staff.page';
import { EmployerPaymentPage } from '../employer-payment/employer-payment.page';
import { EmployerAccountPage } from '../employer-account/employer-account.page';

const routes: Routes = [
  {
    path: 'tabs-employer',
    component: TabsEmployerPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs-employer/(employer-dashboard:employer-dashboard)',
        pathMatch: 'full',
      },
      {
        path: 'employer-dashboard',
        outlet: 'employer-dashboard',
        component: EmployerDashboardPage
      },
      {
        path: 'employer-staff',
        outlet: 'employer-staff',
        component: EmployerStaffPage
      },
      {
        path: 'employer-payment',
        outlet: 'employer-payment',
        component: EmployerPaymentPage
      },
      {
        path: 'employer-account',
        outlet: 'employer-account',
        component: EmployerAccountPage
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-employer/(employer-dashboard:employer-dashboard)',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsEmployerPageRoutingModule {}
