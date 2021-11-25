import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly CATEGORY_URL = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) { }

  public getAllCategoryManagement(): Observable<any> {
    return this.httpClient.get<any>(
      this.CATEGORY_URL + '/'
    );
  }


  public getAllManagement(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.getAllCategoryManagement({})
        .pipe(take(1))
        .subscribe(
          (Response) => {
            resolve(Response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public sendCategoryManagement({}): Observable<any> {
    return this.httpClient.post<any>(
      this.CATEGORY_URL + '/add', {}
    );
  }

  public sendCategory(item: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.sendCategoryManagement(item)
        .pipe(take(1))
        .subscribe(
          (Response) => {
            resolve(Response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}

