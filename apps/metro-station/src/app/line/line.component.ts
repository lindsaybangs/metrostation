import { Component, Input, OnInit } from '@angular/core';

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
export class LineComponent implements OnInit {
  @Input() status: MetroLine;

  constructor() {}

  ngOnInit(): void {}
}
