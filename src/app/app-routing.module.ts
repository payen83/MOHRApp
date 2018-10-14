import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', pathMatch: 'full' },
  { path: 'tabs-employer', loadChildren: './tabs-employer/tabs-employer.module#TabsEmployerPageModule', pathMatch: 'full' },
  { path: 'EmployerAccount', loadChildren: './employer-account/employer-account.module#EmployerAccountPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
