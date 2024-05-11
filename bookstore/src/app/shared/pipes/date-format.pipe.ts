import { Pipe, PipeTransform } from '@angular/core';
import firebase from 'firebase/compat/app'; // Ensure Firebase is imported to access Timestamp type

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string | firebase.firestore.Timestamp): string {
    if (!value) {
      return '';
    }

    // Check if value is a Firestore Timestamp and convert
    let date: Date;
    if (value instanceof firebase.firestore.Timestamp) {
      date = value.toDate();
    } else if (value instanceof Date) {
      date = value;
    } else {
      date = new Date(value);
    }

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
