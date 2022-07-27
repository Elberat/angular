import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number) {
    if (value < 60) return `${value}min`;
    if (value % 60 === 0) return `${value / 60}h`;
    if (value % 60 !== 0) {
      let h = Math.floor(value / 60);
      let m = value - 60 * h;
      return `${h}h ${m}min`;
    }
    return;
  }
}
