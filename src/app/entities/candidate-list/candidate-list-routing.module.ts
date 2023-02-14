import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidateListComponent } from './candidate-list.component';
import { CandidatesResolver } from './services/candidates.resolver';

const routes: Routes = [
  {
    path: '',
    component: CandidateListComponent,
    resolve: { candidates: CandidatesResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateListRoutingModule{

}
