import { Routes } from '@angular/router';
import { CategoriaAdministrarComponent } from './administrar/categoriaadministrar.component';


export const ComponentsRoutes: Routes = [
 {
       path: '',
       children: [ {
         path: 'administrar',
         component: CategoriaAdministrarComponent
     }]
     //, {
    // path: '',
    // children: [ {
    //   path: 'grid',
    //   component: GridSystemComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'panels',
    //         component: PanelsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'sweet-alert',
    //         component: SweetAlertComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }
 }];
