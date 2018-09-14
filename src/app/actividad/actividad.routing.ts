import { Routes } from '@angular/router';
import { ActividadAdministrarComponent } from './administrar/actividadadministrador.component';



export const ComponentsRoutes: Routes = [
 {
       path: '',
       children: [ {
         path: 'administrar',
         component: ActividadAdministrarComponent
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
