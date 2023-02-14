import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-information',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInformationComponent {
  @Input() icon?: string;
  @Input() label!: string;
}
