import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LineContainerComponent } from './line/line-container.component';
import { LineComponent } from './line/line.component';

describe.skip('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, LineContainerComponent, LineComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
