import { Observable } from "rxjs";
import { AgencyModel } from "./agency.model";

export interface AgencyStrategy {
    executeGet(): Observable<AgencyModel[]>;
}

export class AgencyContext {
    private strategy!: AgencyStrategy;

    setStrategy(strategy: AgencyStrategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        return this.strategy.executeGet();
    }
}