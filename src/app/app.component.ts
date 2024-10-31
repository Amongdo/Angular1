import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { ListOrdersComponent } from "./orders/list-orders/list-orders.component";
import {SiteFrameworkModule } from './site-framework/site-framework.module';
import { HeaderComponent } from './site-framework/header/header.component';
import { SidebarComponent } from "./site-framework/sidebar/sidebar.component";
import { FooterComponent } from "./site-framework/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OrdersModule,
    ListOrdersComponent,
    SiteFrameworkModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop4less';
}
