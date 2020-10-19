import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineContainerComponent } from './line/line-container.component';
import { LineComponent } from './line/line.component';
import { StmService } from './stm.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, LineContainerComponent, LineComponent ],
  imports: [BrowserModule, HttpClientModule],
  providers: [StmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
