import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() public titleToolbar: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToHome(): void {
    this.router.navigate(['']);
  }

}
