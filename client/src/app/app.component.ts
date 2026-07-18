import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import "zone.js";
import { HeaderComponent } from "./layout/header/header.component";
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/models/product';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient)
  private baseUrl = "https://localhost:5001/api/"
  products : Product[] = [];
  title = 'SkyDev';
  ngOnInit(): void {
    this.http.get<Pagination<Product>>(this.baseUrl + 'products/').subscribe({
      next: response => this.products = response.data,
      error: err => console.log(err),
      complete: () => console.log("complete")
    });
  }
}
