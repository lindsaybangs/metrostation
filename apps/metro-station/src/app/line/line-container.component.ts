import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MetroLine } from './line.component';
import { StmMetro, StmService } from '../stm.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lindsay-line-container',
  templateUrl: './line-container.component.html',
  styleUrls: ['./line-container.component.scss']

})
export class LineContainerComponent implements OnInit {

    statuses$: Observable<MetroLine[]>;

    constructor(private metroService: StmService) { }
  
    ngOnInit(): void {
      this.getStatuses();
    }
  
    getStatuses(): void {
      this.statuses$ = this.metroService.fetch().pipe(map(this.mapMetroToLines));
    }
  
    mapMetroToLines(metro: StmMetro[]): MetroLine[] {
      return metro.map(line => { return { line: line.name, status: line.data.text }});
    }
}
