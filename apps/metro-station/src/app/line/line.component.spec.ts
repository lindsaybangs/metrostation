import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineComponent } from './line.component';

describe('LineComponent', () => {
  let component: LineComponent;
  let fixture: ComponentFixture<LineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineComponent);
    component = fixture.componentInstance;
  });

  it.each`
    status
    ${'running'}
    ${'unavailable'}
    ${undefined}
  `('should render when the status is $status', ({ status }) => {
    component.status = { line: 'Orange', status: status };
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should render when there is no status', () => {
    component.status = { line: undefined, status: undefined };
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
