import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[],args?: any){
    if (args==null){
      return values;
    }
    else{
      return values.filter(p=> p.name.toLowerCase().includes(args.toLowerCase()));
    }
  }

}
