import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: string[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 100;
    let trait = args.length > 0 ? args[1] : '...';
    return value.length > limit ? value.substring(0,limit) + trait : value;
  }

}
