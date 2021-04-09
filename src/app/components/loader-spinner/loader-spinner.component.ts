import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderSpinnerService } from '@mindata/services';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html'
})
export class LoaderSpinnerComponent implements OnInit {

  public color = 'primary';
  public mode = 'indeterminate';
  public value = 50;
  public showLoading: Subject<boolean> = this.loaderSpinnerService.isLoading;

  constructor(private loaderSpinnerService: LoaderSpinnerService) { }

  ngOnInit() {
  }

}
