import { HttpParams } from '@angular/common/http';


export class HttpHelper {
  static generateQueryParams(filter: any) {
    let queryParams = null;

    if (filter) {
      queryParams = Object.getOwnPropertyNames(filter).filter(param => filter[param] !== undefined && filter[param] !== null && filter[param] !== '')
        .reduce((p, key) => p.set(key, filter[key]), new HttpParams());
    }

    return queryParams;
  }
}
