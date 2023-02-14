import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

import { ICandidate } from './components/candidate-card/interfaces/candidate.interface';
import { CandidatesEntityService } from './services/candidates-entity.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit, OnDestroy{

  private _candidateEntityService = inject(CandidatesEntityService);

  public candidates$: Observable<ICandidate[]> = this._candidateEntityService.entities$;
  public searchInputControl = new FormControl('');

  private _destroy$: Subject<void> = new Subject<void>();


  public ngOnInit():void {
    this._startListenSearch();
  }

  public deleteCandidate(candidate: ICandidate): void{
    this._candidateEntityService.delete(candidate);
  }

  private _startListenSearch(): void{
    this.searchInputControl.valueChanges
        .pipe(
        takeUntil(this._destroy$)
      );
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
