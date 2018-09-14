import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ComponentsRoutes } from './categoria.routing';
import { CategoriaAdministrarComponent } from './administrar/categoriaadministrar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CategoriaAdministrarComponent
  ]
})

export class CategoriaModule {}