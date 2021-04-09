import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoaderSpinnerService } from '@mindata/services';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderSpinnerService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
        return next.handle(req)
        .pipe(
            delay(1000),
            finalize(() => this.loaderService.hide())
        );
  }
}

