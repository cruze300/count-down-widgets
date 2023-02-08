import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CurrentDateService } from '../../current-date.service';

@Component({
  selector: 'app-count-down-field',
  templateUrl: './count-down-field.component.html',
  styleUrls: ['./count-down-field.component.scss'],
})
export class CountDownFieldComponent implements OnInit {
  @Input() label: any;
  @Input() id: any;
  @Input() count: number = 300;
  @Output() closed = new EventEmitter<any>();

  constructor( private currentDateService: CurrentDateService ) { 
    this.label = this.currentDateService.addCountDown(this.count); 
  }

  ngOnInit(): void {}

  close() {
    this.closed.emit({ id: this.id });
  }
}
