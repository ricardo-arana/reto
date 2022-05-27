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
      event: 'virtualPage',
      pagePath: pagePath || this.router.url,
      pageName: pageName ? pageName : ''
    });
  }

  setVirtualEvent(category: string, label: string, action: string, metrics?: Metrics): void {
    dataLayer.push({
      event: 'virtualEvent',
      category,
      action,
      label,
      ...metrics
    });
    
  }
}
