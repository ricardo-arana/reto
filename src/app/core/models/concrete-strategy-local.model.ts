import { Observable, of, delay } from 'rxjs';
import { AgencyModel } from './agency.model';
import { AgencyStrategy } from './strategy.model';

export class ConcreteStrategyLocal implements AgencyStrategy{

  constructor() { }
  executeGet(): Observable<AgencyModel[]> {
    const dataText = localStorage.getItem('data') || '';
    const data: AgencyModel[] = JSON.parse(dataText);
    return of(data).pipe(delay(2000));
  }
}
