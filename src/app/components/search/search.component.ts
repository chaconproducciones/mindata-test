import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @Output() public sendFind = new EventEmitter();
  @ViewChild('search', { static: true }) public valueInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public sendFindHeroe(): void {
    this.sendFind.emit(this.valueInput.nativeElement.value);
  }

}
