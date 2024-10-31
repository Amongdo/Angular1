import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then(
        (m) => m.ProductsComponent
      ),
},
{
    path: 'orders',
    loadComponent: () =>
      import('./orders/list-orders/list-orders.component').then (
        (m) => m.ListOrdersComponent
      ),
  },
  {
    path: 'products/create-product',
    loadComponent: () =>
      import('./products/create-product/create-product.component').then(
        (m) => m.CreateProductComponent
      ),
  },
  {
    path: 'products/delete-product',
    loadComponent: () =>
      import('./products/delete-product/delete-product.component').then(
        (m) => m.DeleteProductComponent
      ),
  },
  {
    path: 'products/update-product',
    loadComponent: () =>
      import('./products/update-product/update-product.component').then(
       (m) => m.UpdateProductComponent
      ),
  },
  {
    path: 'products/view-all-products',
    loadComponent: () =>
      import('./products/view-all-products/view-all-products.component').then(
        (m) => m.ViewAllProductsComponent
      ),
  },
  {
    path: 'products/view-all-products-by-category',
    loadComponent: () =>
      import('./products/view-all-products-by-category/view-all-products-by-category.component').then(
        (m) => m.ViewAllProductsByCategoryComponent
      ),
  },
  {
    path: 'products/view-all-products-by-date',
    loadComponent: () =>
      import('./products/view-all-products-by-date/view-all-products-by-date.component').then(
        (m) => m.ViewAllProductsByDateComponent
      ),
  },
  {
    path: 'products/view-product',
    loadComponent: () =>
      import('./products/view-product/view-product.component').then(
        (m) => m.ViewProductComponent
      ),
   },
];
  