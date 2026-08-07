import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createStorefrontClient, initStorefront } from '@promotershop/storefront-dropins';

const client = createStorefrontClient({
  baseUrl: 'https://bff.storefront.sh',
  affiliateId: 'LWF',
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
})
export class App {}
