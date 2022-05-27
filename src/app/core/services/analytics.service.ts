import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var dataLayer: any[];

interface Metrics {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) { }

  setVirtualPage(pageName: string, pagePath?: string): void {
    dataLayer.push({
      event: 'gtm.event',
      title: pageName,
      path: pagePath || this.router.url,
      referrer: document.referrer,
    });
  }

  setVirtualEvent(category: string, label: string, action: string, metrics?: Metrics): void {
    dataLayer.push({
      event: 'gtm.event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      ...metrics
    });
    
  }
}
