import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicImagesComponent } from './dynamic-images/dynamic-images.component';
import { StaticImagesComponent } from './static-images/static-images.component';

const routes: Routes = [
  {
    path: '',
    component: StaticImagesComponent
  },
  {
    path: 'dynamic',
    component: DynamicImagesComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
