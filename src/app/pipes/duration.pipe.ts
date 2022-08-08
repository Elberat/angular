import { Pipe, PipeTransform } from '@angular/core';
import { differenceInMinutes } from 'date-fns';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  private msInHour = 1000 * 60 * 60;
  private msInMinute = 1000 * 60;
  transform(value: number) {
    console.log(value);
    if (!value) return '';
    if (value < 60) return `${value}min`;
    if (value % 60 === 0) return `${value / 60}h`;
    if (value % 60 !== 0) {
      let h = Math.floor(value / 60);
      let m = value - 60 * h;
      return `${h}h ${m}min`;
    }
    return;
  }

  changeDurationFromMsToMinutes(duration: number): string {
    return `${differenceInMinutes(duration, 0)}`;
  }

  changeDurationFromMinutesToMs(duration: string) {
    return +duration * this.msInMinute;
  }
}
