import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { ICandidate } from '../components/candidate-card/interfaces/candidate.interface';

@Injectable()
export class CandidatesEntityService extends EntityCollectionServiceBase<ICandidate>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Candidate', serviceElementsFactory);
  }
}
