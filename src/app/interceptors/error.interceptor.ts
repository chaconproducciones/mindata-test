
import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { MessagesErrorService } from '@mindata/services';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: MessagesErrorService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof ErrorEvent) {
            this.errorService.showErrorDatos();
        } else {
            this.errorService.showError();
        }
        
        return throwError(null);
      })
    );
  }
}