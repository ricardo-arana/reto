import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs';
import { AgencyModel } from 'src/app/core/models/agency.model';
import { AgenciesService } from 'src/app/core/services/agencies.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  loading: boolean = false;
  agency!: AgencyModel | undefined;
  urlmaps: string = '';
  form!: FormGroup;
  constructor(
    private agenciesSerivce: AgenciesService,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    ) { 
    this.initForm();
  }

  ngOnInit(): void {
    this.getAgencies();
  }

  initForm() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      district: ['', Validators.required],
      province: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });

    this.form.valueChanges.subscribe(() => {
      this.updateUrlMap();
    })
  }

  getAgencies() {
    this.loading = true;
    this.activeRouter.params.pipe(
      mergeMap( ({id}) => this.agenciesSerivce.getAgencies().pipe(map( agencies => agencies.find( a => a.id === +id))))
    ).subscribe( agency => {
      console.log(agency)
      this.loading = false;
      this.agency = agency;
      this.form.setValue({
        ...agency
      })
    })
  }

  updateUrlMap() {
    const latitude = this.form?.value.latitude.toString().replace(',','.');
    const longitude = this.form?.value.longitude.toString().replace(',','.');
    console.log(latitude, longitude)
    this.urlmaps = `https://maps.google.com/maps?q=${longitude},${latitude}&hl=es&z=14&amp;output=embed`;
  }

  submit() {

    if(this.form.valid) {
      const agencyEdited: AgencyModel = {
        ...this.form.value,
        id: +this.form.value.id,
        latitude: +this.form.value.latitude,
        longitude: +this.form.value.longitude
      }

      this.agenciesSerivce.editAgency(agencyEdited);
      this.router.navigateByUrl('/agencies/list');
    }
  }

  goTolist() {
    this.router.navigateByUrl('/agencies/list');
  }

}
