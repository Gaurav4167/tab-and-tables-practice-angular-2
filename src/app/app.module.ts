import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { StudentComponent } from './component/student/student.component';
import { ElectronicProduct } from './component/product2/product2.component';
import { LabComponent } from './component/lab/lab.component';
import { HtmlTabComponent } from './component/htmlTab/htmltab.component';
import { BackEndComponent } from './component/backend/backend.component';
import { TableComponent } from './component/tables/tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCrudComponent } from './component/todoCrud/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    StudentComponent,
    ElectronicProduct,
    LabComponent,
    HtmlTabComponent,
    BackEndComponent,
    TableComponent,
    TodoCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatChipsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
