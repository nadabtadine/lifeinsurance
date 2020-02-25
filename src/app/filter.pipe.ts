import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[],args?: any){
    return values.filter(p=> p.name.toLowerCase().includes(args.toLowerCase()));
  }

}
