import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppBootstrapModule } from './shared/app-bootstrap/app-bootstrap.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ReviewsListComponent } from './components/reviews/reviews-list/reviews-list.component';
import { ReviewsItemComponent } from './components/reviews/reviews-item/reviews-item.component';
import { AddReviewsComponent } from './components/reviews/add-reviews/add-reviews.component';
import { ErrorInterceptor } from './shared/interceptors/errow.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    ProductListComponent,
    ProductCardComponent,
    SingleProductComponent,
    ReviewsListComponent,
    ReviewsItemComponent,
    AddReviewsComponent,
    NotFoundComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppBootstrapModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
