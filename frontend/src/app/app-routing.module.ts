import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/components/public-layout/public-layout.component';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  {
    path:'public',
    component: PublicLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./public/public.module').then(m => PublicModule)
      }
    ]

  },
  {
    path:'',
    component: PublicLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('./public/public.module').then(m => PublicModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
