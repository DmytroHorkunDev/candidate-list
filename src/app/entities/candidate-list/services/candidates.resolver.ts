import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';

import { CandidatesEntityService } from './candidates-entity.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatesResolver implements Resolve<boolean> {
  constructor(private candidatesService: CandidatesEntityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.candidatesService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) this.candidatesService.getAll();
      }),
      filter(loaded => !!loaded),
      first()
    );
  }
}
