import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownFieldComponent } from './components/count-down-field/count-down-field.component';
import { CurrentDateFieldComponent } from './components/current-date-field/current-date-field.component';
import { CurrentDateService } from './current-date.service';
import { CountDownPipe } from './count-down.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountDownFieldComponent,
    CurrentDateFieldComponent,
    CountDownPipe,
  ],
  imports: [BrowserModule],
  providers: [CurrentDateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
