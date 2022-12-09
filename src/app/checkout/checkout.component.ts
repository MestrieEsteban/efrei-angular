import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Product, products } from '../products';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	products!: Product[];

	ngOnInit(): void {
		let actualCheckout = localStorage.getItem('checkout')
		if (actualCheckout) {
			this.products = JSON.parse(actualCheckout);
		}
	}
	addQuantity(product: Product) {
		//search for the product in the checkout
		let index = this.products.findIndex((p) => p.id === product.id);
		if (index !== -1) {
			this.products[index].quantity++;
		}
		//update the checkout
		localStorage.setItem('checkout', JSON.stringify(this.products));
	}
	removeQuantity(product: Product) {
		//search for the product in the checkout
		let index = this.products.findIndex((p) => p.id === product.id);
		if (index !== -1) {
			if (this.products[index].quantity > 0) {
				this.products[index].quantity--;
			}
			if (this.products[index].quantity === 0) {
				this.products.splice(index, 1);
			}
		}
		//update the checkout
		localStorage.setItem('checkout', JSON.stringify(this.products));
		if (this.products.length === 0) {
			localStorage.removeItem('checkout');
		}
	}

	constructor(private route: ActivatedRoute) { }

}
