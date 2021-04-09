import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialogs-formats',
  templateUrl: './dialogs-formats.component.html'
})
export class DialogsFormatsComponent implements OnInit {

  public isConfirmation: boolean = false;
  public title: string = '';
  public subtitle: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getDataParamsDialog();
  }

  public getDataParamsDialog(): void {
    const { title, subtitle, isConfirmation } = this.data;
    this.title = title;
    this.subtitle = subtitle;
    this.isConfirmation = isConfirmation;
  }

}
