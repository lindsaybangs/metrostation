import { Component, Input } from '@angular/core';

export interface MetroLine {
  line: string;
  status: string;
  start?: Date;
}

@Component({
  selector: 'lindsay-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent {
  @Input() status: MetroLine;
}
