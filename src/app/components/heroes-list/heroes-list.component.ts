import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatPaginatorIntl, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PARAMS_MODAL } from '@mindata/constants';
import { Heroes } from '@mindata/models';
import { HeroesService } from '@mindata/services';
import { DialogsFormatsComponent } from '../dialogs-formats/dialogs-formats.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public heroes: Heroes[];
  @Output() public deleteHeroeEvent = new EventEmitter<number>();
  public displayedColumns: string[] = ['title', 'description', 'origin', 'actions'];
  public heroesSource: MatTableDataSource<Heroes>;
  public matPaginatorCustom = new MatPaginatorIntl();
  public suscriptions: Array<Subscription> = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  

  constructor(public dialog: MatDialog, private router: Router, private heroesService: HeroesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.heroes;
    currentValue ? this.setTablePaginator(currentValue) : null;
  }

  ngOnInit() {
  }

  private setTablePaginator(heroes: Heroes[]): void {
    this.heroesSource = new MatTableDataSource<Heroes>(heroes);
    this.heroesSource.paginator = this.paginator;
  }

  public deleteHeroe(heroe: Heroes): void {
    const dialogRef = this.dialog.open(DialogsFormatsComponent, { data: PARAMS_MODAL.CONFIRMAR_ELIMINAR_HEROE });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteHeroeEvent.emit(heroe.id);
      }
    });
  }

  public goDetail(heroe: Heroes): void {
    this.suscriptions.push(
      this.heroesService.getHeroesById(heroe.id).subscribe(heroe => {
        if(heroe){
          this.heroesService.heroeForEdit.next(heroe);
          this.router.navigate(['heroes/heroes-detail'])
        }
      })
    )
    
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(suscriptions => {
      suscriptions.unsubscribe();
    })
  }

}
