import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyModel } from 'src/app/core/models/agency.model';
import { AgenciesService } from 'src/app/core/services/agencies.service';
import { AnalyticsService } from 'src/app/core/services/analytics.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading: boolean = false;
  list!: AgencyModel[];

  constructor(private agenciesSerivce: AgenciesService, private router: Router,
    private analytics: AnalyticsService) { }

  ngOnInit(): void {
   this.analytics.setVirtualPage('lista de agencias', '/agencies/list');
   this.getAgencies();
  }


  getAgencies() {
    this.loading = true;
    this.agenciesSerivce.getAgencies().subscribe( agencies => {
      this.loading = false;
      this.list = agencies;
    })
  }

  edit(agency: AgencyModel) {
    this.analytics.setVirtualEvent('Agency', 'Edit', 'Click');
    this.router.navigate(['/', 'agencies', 'edit', agency.id])
  }

}
