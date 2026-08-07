import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import '@promotershop/storefront-components';
import { initStorefront } from '@promotershop/storefront-runtime';
import { createStorefrontClient } from '@promotershop/storefront-sdk';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  async ngOnInit() {
    const client = createStorefrontClient({
      baseUrl: '',
      affiliateId: 'LWF',
    });

    const app = await initStorefront({
      root: document.getElementById('shop')!,
      client,
    });

    await app.renderProduct('2000145825');

    const { cart } = app.store.getSnapshot();
    console.log("totalCount=", cart.totalCount); // number of items
  }
}
