import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../../../../do/index';
import { MessageService } from "../../../service/message.service";
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'appication/json' }),
}
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = '';//url
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /*  GET 请求获取数据 */
  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>(`getHeroes`, []))
    )

  }

  /***** 
   * GET请求数据，但是返回的是undefined
   */
  getHero404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url).pipe(
      map(heroes => heroes[0]), tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} hero id=${id}`);

      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`)
      ))
  }

  /****  Get数据 */


  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => { this.log(`fetched hero id=${id}`) }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )

  }

  /***
   * 搜索数据服务
   */


  searchHero(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);//如果没有搜索对应的内容，返回一个空的Hero 数组
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => { this.log(`found heroes matching "${term}"`) }),
      catchError(this.handleError<Hero[]>('searchHeroes', [])
      ))
  }

  /****
   * 增加数据服务
   */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => {

        this.log(`added hero w/id=#{newHero.id}`),
          catchError(this.handleError<Hero>('addHero'))

      })
    )
  }

  /*****
   * 删除数据服务
   */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => { this.log(`delete hero id=${id}`) }),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }


  /**
   *
   *update 更新服务数据
   */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed:${error.message}`)


      return of(result as T);
    }
  }
  private log(message: string) {
    this.messageService.add(`HeroService:${message}`)
  }
}
