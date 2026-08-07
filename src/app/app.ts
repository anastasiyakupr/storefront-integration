import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import '@promotershop/storefront-components';
import { initStorefront } from '@promotershop/storefront-runtime';
import { createStorefrontClient } from '@promotershop/storefront-sdk';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App implements OnInit {
  async ngOnInit() {
    const client = createStorefrontClient({
      baseUrl: environment.bffUrl,
      affiliateId: environment.affiliateId,
    });

    const app = await initStorefront({
      root: document.getElementById('shop')!,
      client,
    });

    await app.renderProduct(environment.productId);
  }
}
