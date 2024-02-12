import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortComponent } from './port/port.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'about',component:AboutComponent,title:'AboutPage'},
  {path:'port',component:PortComponent,title:'PortPage'},
  {path:'contact',component:ContactComponent,title:'ContactPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
