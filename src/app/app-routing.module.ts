import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'top', component: TopPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
  StartPageComponent,
  TopPageComponent
];
