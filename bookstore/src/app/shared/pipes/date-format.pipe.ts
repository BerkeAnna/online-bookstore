import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string): string {
    if (!value) {
      return '';
    }

    // Ensure value is a Date object
    let date = value instanceof Date ? value : new Date(value);

    // Helper function to add leading zeros
    const pad = (num: number) => num < 10 ? '0' + num : num.toString();

    // Assemble date and time components
    let year = date.getFullYear(),
        month = pad(date.getMonth() + 1), // Months are 0-indexed
        day = pad(date.getDate()),
        hour = pad(date.getHours()),
        minute = pad(date.getMinutes());

    // Construct the desired format
    return `${year}.${month}.${day}. ${hour}:${minute}`;
  }
}
