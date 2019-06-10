import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awsesome'
})
export class AwsesomePipe implements PipeTransform {

  transform(value: string) {
    return value ? "大写" + value : "";


  }

}
