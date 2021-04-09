import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoaderSpinnerComponent } from 'src/app/components/loader-spinner/loader-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderSpinnerService {

  public isLoading = new Subject<boolean>();
    
  constructor() { }

  public show(): void {
    this.isLoading.next(true);
  }

  public hide(): void {
    this.isLoading.next(false);
  }
}
