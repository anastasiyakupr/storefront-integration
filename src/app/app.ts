import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { createStorefrontClient, initStorefront } from '@promotershop/storefront-dropins';
import { environment } from '../environments/environment';

const client = createStorefrontClient({
  baseUrl: environment.bffUrl,
  affiliateId: environment.affiliateId,
});

initStorefront({
  root: document.body,
  client,
});

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {}
