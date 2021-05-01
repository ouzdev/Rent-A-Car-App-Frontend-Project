import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "Active"
})
export class ActivePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? "Aktif" : "Pasif";
  }
}
