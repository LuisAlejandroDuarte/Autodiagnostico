import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ComponentsRoutes } from './actividad.routing';
import { ActividadAdministrarComponent } from './administrar/actividadadministrador.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ActividadAdministrarComponent
  ]
})

export class ActividadModule {}