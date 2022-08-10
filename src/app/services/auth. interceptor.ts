import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LocalStorageService } from './localStorage.service';
import { SpinnerService } from './spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private spinnerService: SpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.localStorageService.getToken();
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', authToken ?? ''),
    });

    this.spinnerService.isLoading.next(true);

    return next.handle(clonedReq).pipe(
      finalize(() => {
        this.spinnerService.isLoading.next(false);
      })
    );
  }
}
