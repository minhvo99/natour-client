import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string | unknown {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }

}
