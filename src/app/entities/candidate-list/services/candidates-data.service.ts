import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';

import { environment } from '../../../../environments/environment';
import { ICandidate } from '../components/candidate-card/interfaces/candidate.interface';

@Injectable()
export class CandidatesDataService extends DefaultDataService<ICandidate>{

  private readonly _api = `${environment.apiUrl}candidates`;
  
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Candidate', http, httpUrlGenerator);
  }

  public override getAll(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(`${this._api}`);
  }

  public override delete(key: number | string): Observable<number | string> {
    return this.http.delete<number | string>(`${this._api}/${key}`);
  }

  public override update(update: Update<ICandidate>): Observable<ICandidate> {
    return this.http.patch<ICandidate>(`${this._api}/${update.id}`, update);
  }

  public override upsert(entity: ICandidate): Observable<ICandidate> {
    return this.http.post<ICandidate>(`${this._api}`, entity);
  }
}
