import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { AgencyAdapter, AgencyDto, AgencyModel } from './agency.model';
import { AgencyStrategy } from './strategy.model'


export class ConcreteStrategyRemote implements AgencyStrategy{

  constructor(private http: HttpClient) { }

  executeGet(): Observable<AgencyModel[]> {
    return this.http.get<AgencyDto[]>('./assets/json/agencias.json').pipe(
      delay(2000),
      map( agencies => {
        const data = agencies.map((a, index) => new AgencyAdapter(index + 1, a));
        localStorage.setItem('data', JSON.stringify(data));
        return data;
      }));
  }

}
