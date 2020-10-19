import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineComponent } from './line.component';

describe('LineComponent', () => {
  let fixture: ComponentFixture<LineComponent>;
  let component: LineComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineComponent],
      declarations: [LineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LineComponent);
    component = TestBed.inject(LineComponent);
    component.status = { line: 'Orange', status: 'ok' };
  });

  it('should render with line status available', () => {
    expect(fixture).toMatchSnapshot();
  });
});
