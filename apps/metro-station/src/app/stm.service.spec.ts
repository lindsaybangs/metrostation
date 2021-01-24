import { HttpClient } from '@angular/common/http';
import { hot } from 'jest-marbles';

import { StmMetro, StmService } from './stm.service';

describe('STM Service', () => {
  let service: StmService;

  const http: HttpClient = {
    get(): any {},
  } as any;

  beforeEach(() => {
    service = new StmService(http as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data through the HttpClient', () => {
    const expectedResponse: StmMetro[] = [
      {
        id: '123',
        name: 'Orange',
        data: {
          text: '',
          priority: '',
          level: '',
          logic_number: '',
          start_date: '',
          start_time: '',
        },
      },
    ];

    /**
 * "metro": {
        "1": {
            "name": "Ligne verte",
            "id": "1",
            "data": {
                "text": "Service normal du métro",
                "priority": "88",
                "level": "Metro",
                "logic_number": "1343111",
                "start_date": "20201015",
                "start_time": "0914"
            }
        },
        "2": {
            "name": "Ligne orange",
            "id": "2",
            "data": {
                "text": "Service normal du métro",
                "priority": "88",
                "level": "Metro",
                "logic_number": "1365682",
                "start_date": "20201014",
                "start_time": "1115"
            }
        },
 */

    const httpMetroResponse = {
      metro: {
        '1': {
          id: '123',
          name: 'Orange',
          data: {
            text: '',
            priority: '',
            level: '',
            logic_number: '',
            start_date: '',
            start_time: '',
          },
        },
      },
    };

    const httpResponse = {
      language: 'en',
      status: '',
      metro: httpMetroResponse,
    };
    spyOn(http, 'get').and.returnValue(hot('a', { a: httpResponse }));

    const res = service.fetch();
    expect(res).toBeObservable(hot('a', { a: [expectedResponse] }));
  });
});
