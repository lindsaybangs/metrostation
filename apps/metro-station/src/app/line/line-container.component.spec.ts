import { LineContainerComponent } from './line-container.component';
import { Observable, of } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';
import { StmMetro } from '../stm.service';

describe('LineContainerComponent', () => {
  let component: LineContainerComponent;

  let mockLine: StmMetro = {
    id: '',
    name: '',
    data: {
      text: '',
      priority: '',
      level: '',
      logic_number: '',
      start_date: '',
      start_time: '',
    },
  };

  let mockService = {
    fetch(): Observable<StmMetro[]> {
      return of([mockLine]);
    },
  };

  beforeEach(() => {
    component = new LineContainerComponent(mockService as any);
  });

  it('should retrieve the status of the lines from the service', fakeAsync(() => {
    //spyOn(mockService, "fetch").and.returnValue(of('{ line: "Orange", status: "All good"}, { line: "Green", status: "Oh dear"}'));
    const expectedStatuses = [
      {
        line: 'Orange',
        status: 'All good',
      },
      {
        line: 'Green',
        status: 'Oh dear',
      },
    ];

    component.getStatuses();
    tick();

    // TODO: Find practices for assertions on ob
    //console.log(component.statuses$);
    //expect(component.statuses$).toBe(of(expectedStatuses));
  }));
});
