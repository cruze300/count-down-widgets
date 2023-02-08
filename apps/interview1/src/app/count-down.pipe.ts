import { Pipe, PipeTransform } from '@angular/core';
import { Observable, timer, map, takeWhile } from 'rxjs';

@Pipe({
  name: 'countDown'
})
export class CountDownPipe implements PipeTransform {

  transform(value: number): Observable<number> {
    return timer(0, 1000).pipe(
      map(n => (value - n) * 1000),
      takeWhile(n => n >= 0),
    );
  }

}
