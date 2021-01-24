import { LineContainerComponent } from './line-container.component';
import { Observable } from 'rxjs';
import { StmMetro, StmService } from '../stm.service';
import { hot } from 'jest-marbles';

describe('LineContainerComponent', () => {
  let component: LineContainerComponent;

  const mockLine: StmMetro = {
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

  const mockService: StmService = {
    fetch(): Observable<StmMetro[]> {
      return hot('a', [mockLine]);
    },
  } as any;

  beforeEach(() => {
    component = new LineContainerComponent(mockService);
  });

  it('should retrieve the status of the lines from the service', () => {
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

    spyOn(mockService, 'fetch').and.returnValue(
      hot('a', {
        a: [
          { name: 'Orange', data: { text: 'All good' } },
          { name: 'Green', data: { text: 'Oh dear' } },
        ],
      })
    );

    component.loadStatuses();

    expect(component.statuses$).toBeObservable(
      hot('a', { a: expectedStatuses })
    );
  });
});
