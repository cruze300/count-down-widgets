/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { CurrentDateFieldComponent } from './components/current-date-field/current-date-field.component';
import { CountDownFieldComponent } from './components/count-down-field/count-down-field.component';
import { CurrentDateService } from './current-date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('labelContainer', {
    read: ViewContainerRef,
  })
  viewContainerRef!: ViewContainerRef;

  //components = new Map<string, ComponentRef<any>>();
  //index: number = 0;

  Button1 = 'Add Countdown';
  Button2 = 'Add Current Time';
  ButtonClass1 = 'red';
  ButtonClass2 = 'blue';
  countDownValue = 300;

  constructor( private currentDateService: CurrentDateService ) {}

  public ngOnInit(): void {}

  ButtonAction1 = () => {
    // this.createComponent(CountDownFieldComponent);
    this.viewContainerRef.createComponent(CountDownFieldComponent);
  };

  ButtonAction2 = () => {
    // this.createComponent(CurrentDateFieldComponent);
    this.viewContainerRef.createComponent(CurrentDateFieldComponent);
  };

  //createComponent(componentName: any) {
    // let uniqueId = componentName.name + this.index;
    // const componentRef = this.viewContainerRef.createComponent(componentName);
    //this.viewContainerRef.createComponent(componentName);
    // (componentRef.instance as any).count = this.countDownValue;
    // (componentRef.instance as any).id = uniqueId;
    // console.log('id added on create ', uniqueId);
    // (componentRef.instance as any).closed.subscribe((res: any) => {
    //   console.log('id received on close ', res.id, componentRef);
    //   this.deleteComponent(res.id);
    // });
    //this.components.set(componentName, componentRef);
    //this.index++;
  //}

  // deleteComponent(id: any) {
  //   const componentToDelete = Array.from(this.components.values()).find((componentRef) => componentRef.instance.id === id);
  //   console.log(id, componentToDelete, this.components);
  //   if (componentToDelete) {
  //     (componentToDelete as any).destroy();
  //     this.components.delete(componentToDelete as any);
  //   }
  // }

  updateCountDownValue(e: any) {
    this.countDownValue = e.target.value * 60;
  }
  
}
