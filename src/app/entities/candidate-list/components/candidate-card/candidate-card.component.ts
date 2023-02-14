import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CardInformationComponent } from './components/card-information/card-information.component';
import { ICandidate } from './interfaces/candidate.interface';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [CommonModule, CardInformationComponent, MatIconModule],
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateCardComponent {
  @Input() candidate!: ICandidate;

  //TODO: it'll be deleted after mat menu implementation, because we can trigger any options using callbacks
  @Output() onDelete: EventEmitter<ICandidate> = new EventEmitter<ICandidate>();
}
