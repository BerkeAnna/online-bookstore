import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    
    // Bemeneti érték átalakítása Date objektummá
    let date = new Date(value);

    // Segédfüggvény a vezető nullák hozzáadására
    const pad = (num: number) => num < 10 ? '0' + num : num.toString();

    // Dátum és idő komponenseinek összeállítása
    let year = date.getFullYear(),
        month = pad(date.getMonth() + 1), // Hónapok 0-tól indexeltek
        day = pad(date.getDate()),
        hour = pad(date.getHours()),
        minute = pad(date.getMinutes());

    // A kívánt formátum összeállítása
    let formattedDate = `${year}.${month}.${day}. ${hour}:${minute}`;
    
    return formattedDate;
  }
}
