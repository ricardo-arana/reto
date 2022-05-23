import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgencyModel } from '../models/agency.model';
import { ConcreteStrategyLocal } from '../models/concrete-strategy-local.model';
import { ConcreteStrategyRemote } from '../models/concrete-strategy-remote.model';
import { AgencyContext } from '../models/strategy.model';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(private http: HttpClient) { }

  getAgencies(): Observable<AgencyModel[]>{

    const context: AgencyContext = new AgencyContext()

    if(localStorage.getItem('data')) {
      context.setStrategy(new ConcreteStrategyLocal())
    } else {
      context.setStrategy(new ConcreteStrategyRemote(this.http))
    }

    return context.executeStrategy();

  }

  editAgency(agency: AgencyModel) {
    console.log(agency)
    const dataText = localStorage.getItem('data') || '';
    const data: AgencyModel[] = JSON.parse(dataText);

    const index = data.findIndex( item => item.id === agency.id)
    data[index] = agency;
    console.log(data)
    localStorage.setItem('data', JSON.stringify(data));
  }
}
