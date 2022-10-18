import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor, HttpParameterCodec,
  HttpParams,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, filter, finalize, switchMap, take, tap} from 'rxjs/operators';
import { AccessToken } from '../auth/model/authDTO';
import { AuthService } from '../auth/service/authConnectToApi/auth.service';
import { HandleDisplayErrorService } from '../shared/service/handleError/handle-display-error.service';
import { url } from 'src/assets/url/url';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
  private isTokenRefreshing = false;
  private startedTime = Date.now();
  private currentToken: BehaviorSubject<AccessToken> = new BehaviorSubject<AccessToken>(new AccessToken());

  constructor(
    private authService: AuthService,
    private router: Router,
    private handleErrorService: HandleDisplayErrorService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.attachDomainToRequest(req))
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse){
          }
        }),
        finalize(() => {
        })
        /*
        , catchError((error: any) => {
          if (error instanceof HttpErrorResponse){
            switch (error.status) {
              case 401:
                localStorage.removeItem(url.tokenName);
                location.href = url.identity;
                break;
              case 402:
                 localStorage.removeItem(url.tokenName);
                 location.href = url.identity;
                break;
              default:
                return this.handleError(error, req);
            }
          }
        }) */

        );
  }

  private handleError(error: HttpErrorResponse, req: HttpRequest<any>): Observable<never> {
    let myRequest: HttpRequest<any> = req.clone();
    if (myRequest.headers.has('handleError')) {
      let headerError = myRequest.headers.get('handleError');
      let errorFace = headerError ? JSON.parse(headerError) : '';
      this.handleErrorService.showError(error.status);
    }
    return throwError(error);
  }


  private attachDomainToRequest(req: HttpRequest<any>): HttpRequest<any> {
    const params = new HttpParams({encoder: new CustomEncoder(), fromString: req.params.toString()});
    let myRequest: HttpRequest<any> = req.clone({params});
      myRequest = req.clone({
        url: url.baseUrl + req.url,
      });
    return this.attachTokenToRequest(myRequest);
  }

  private attachTokenToRequest(req: HttpRequest<any>): HttpRequest<any> {
    let token = localStorage.getItem(url.tokenName);
    const accessTokenObj: AccessToken = token ? JSON.parse(token) : null;
    const accessToken = accessTokenObj?.access_token;
    let myRequest: HttpRequest<any> = req.clone();
    if (!myRequest.headers.has('Authorization')){
      if (accessToken === null || accessToken === '')
      {
        return myRequest;
      }
      else if (accessToken !== undefined && accessToken !== null && accessToken.length > 0) {
        myRequest = myRequest.clone({
          headers: new HttpHeaders({['Authorization']: [`Bearer ${accessToken}`]})
        });
        return myRequest;
      } else {
        return myRequest;
      }
    }
    else {
      const authHeader = req.headers.get('Authorization');
      if (authHeader !== undefined && authHeader !== null) {
        return myRequest;
      }
      else if ((authHeader === undefined || authHeader === null) &&
        (accessToken !== undefined && accessToken !== null && accessToken.length > 0)) {
        myRequest = myRequest.clone({
          headers: new HttpHeaders({['Authorization']: [`Bearer ${accessToken}`]})
        });
        return myRequest;
      }
      else {
        return myRequest;
      }
    }
  }

}
class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }
  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }
  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }
  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
