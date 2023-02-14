import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { InputComponent } from '../../shared/input/input.component';

import { CandidateListRoutingModule } from './candidate-list-routing.module';
import { CandidateListComponent } from './candidate-list.component';
import { CandidateCardComponent } from './components/candidate-card/candidate-card.component';
import { ICandidate } from './components/candidate-card/interfaces/candidate.interface';
import { CandidatesDataService } from './services/candidates-data.service';
import { CandidatesEntityService } from './services/candidates-entity.service';
import { CandidatesResolver } from './services/candidates.resolver';

const entityMetadataMap: EntityMetadataMap = {
  Candidate: {
    sortComparer: (a: ICandidate, b: ICandidate) => a.contact_name > b.contact_name ? 1 : -1
  }
}

@NgModule({
  declarations: [
    CandidateListComponent,
  ],
  imports: [
    CommonModule,
    CandidateListRoutingModule,
    InputComponent,
    CandidateCardComponent,
    ReactiveFormsModule
  ],
  providers: [
    CandidatesEntityService,
    CandidatesResolver,
    CandidatesDataService
  ]
})
export class CandidateListModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private candidateDataService: CandidatesDataService
  ) {
    eds.registerMetadataMap(entityMetadataMap);
    entityDataService.registerService('Candidate', candidateDataService);
  }
}
