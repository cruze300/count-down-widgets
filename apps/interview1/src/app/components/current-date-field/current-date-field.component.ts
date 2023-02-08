import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CurrentDateService } from '../../current-date.service';

@Component({
  selector: 'app-current-date-field',
  templateUrl: './current-date-field.component.html',
  styleUrls: ['./current-date-field.component.scss'],
})
export class CurrentDateFieldComponent implements OnInit {
  @Input() label: any;
  @Input() id: any;
  @Output() closed = new EventEmitter<any>();
  //removeCount: boolean = true;

  constructor( private currentDateService: CurrentDateService ) { 
    this.label = this.currentDateService.addCurrentTime(); 
  }

  ngOnInit(): void {}

  close() {
    this.closed.emit({ id: this.id });
  }
}
