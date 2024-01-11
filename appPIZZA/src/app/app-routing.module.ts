import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { PageHomeComponent } from './home/pages/page-home/page-home.component';
import { PageMenuComponent } from './home/pages/page-menu/page-menu.component';
import { PagePromotionComponent } from './home/pages/page-promotion/page-promotion.component';
import { PageClienteMenuComponent } from './menu/pages/page-cliente-menu/page-cliente-menu.component';
import { PageClienteComponent } from './pedidos/pages/page-cliente/page-cliente.component';
import { PageClientePromocionComponent } from './promociones/pages/page-cliente-promocion/page-cliente-promocion.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: '', component: PageHomeComponent },
  { path: 'pizzas', component: PageMenuComponent },
  { path: 'promocion', component: PagePromotionComponent },
  { path: 'pedidoCliente', component: PageClienteComponent, canActivate: [AuthGuard] },
  { path: 'menuCliente', component: PageClienteMenuComponent, canActivate: [AuthGuard] },
  { path: 'promocionCliente', component: PageClientePromocionComponent, canActivate: [AuthGuard] },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule), canActivate: [AuthGuard] },
  { path: 'promociones', loadChildren: () => import('./promociones/promociones.module').then((m) => m.PromocionesModule), canActivate: [AuthGuard] },
  { path: 'pedidos', loadChildren: () => import('./pedidos/pedidos.module').then((m) => m.PedidosModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }