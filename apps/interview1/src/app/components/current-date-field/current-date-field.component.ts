import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrentDateService } from '../../current-date.service';

@Component({
  selector: 'app-current-date-field',
  templateUrl: './current-date-field.component.html',
  styleUrls: ['./current-date-field.component.scss'],
})
export class CurrentDateFieldComponent implements OnInit {
  @Input() label!: any;
  //@Input() id: any;
  //@Output() closed = new EventEmitter<any>();
  //removeCount: boolean = true;

  newCurrentTime = new Date().getTime() / 1000;

  constructor( private currentDateService: CurrentDateService ) { }

  ngOnInit(): void {
    this.label = this.currentDateService.newCurrentTime.subscribe((res: any) => {
      this.newCurrentTime = res;
    });
  }

  // close() {
  //   this.closed.emit({ id: this.id });
  // }

}
