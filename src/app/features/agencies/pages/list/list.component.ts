import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyModel } from 'src/app/core/models/agency.model';
import { AgenciesService } from 'src/app/core/services/agencies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading: boolean = false;
  list!: AgencyModel[];

  constructor(private agenciesSerivce: AgenciesService, private router: Router) { }

  ngOnInit(): void {

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
    this.router.navigate(['/', 'agencies', 'edit', agency.id])
  }

}
