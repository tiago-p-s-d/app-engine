import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PageConfig } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageBuilder {
  private dbUrl = '/mock-db.json';

  constructor(private http: HttpClient) { }

  getPageBySlug(slug: string): Observable<PageConfig> {
    return this.http.get<any>(this.dbUrl).pipe(
      map(db => db[slug])
    );
  }
}