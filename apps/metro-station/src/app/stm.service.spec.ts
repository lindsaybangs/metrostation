import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { StmService } from './stm.service';

describe('STM Service', () => {
  let service: StmService;

  let http = {
    get(): any {}
  };

  beforeEach(() => {
    service = new StmService(http as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data through the HttpClient', fakeAsync(() => {

    spyOn(http, "get").and.returnValue(of("blah"));
    const res = service.fetch();

    tick();

    //expect(res).toBe(of("blah"));
  }));
});

