import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PARAMS_MODAL } from '@mindata/constants';
import { Heroes } from '@mindata/models';
import { HeroesService } from '@mindata/services';
import { HeroesDetailComponent } from '../components/heroes-detail/heroes-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit, OnDestroy {
  private suscriptions: Array<Subscription> = [];
  public heroes: Heroes[];
  public heroesFilter: Heroes[];

  constructor(private heroesService: HeroesService, private dialog: MatDialog, private router: Router) { }


  ngOnInit() {
    this.getHeroesAll();
  }

  public getHeroesAll(): void {
    this.suscriptions.push(
      this.heroesService.getHeroes().subscribe(heroes => {
        this.heroes = heroes;
        this.findHeroe(null);
      })
    )
  }

  public deleteHeroe(heroeId: number): void {
    this.suscriptions.push(
      this.heroesService.deleteHeroes(heroeId).subscribe(() => {
        this.heroesFilter = this.heroes.filter(heroes => heroes.id !== heroeId);
        this.getHeroesAll();
      }, error => { console.log(error) })
    )

  }

  public newHeroe(): void {
    this.heroesService.heroeForEdit.next(null);
    this.router.navigate(['heroes/heroes-detail'])
  }

  public findHeroe(event: string): void {
    this.heroesFilter = event ? this.heroes.filter(heroes => heroes.name.includes(event.toLowerCase()) || heroes.name.includes(event.toUpperCase())) : this.heroes;
  }

  public editHeroe(heroeId: number): void {
    this.suscriptions.push(
      this.heroesService.getHeroesById(heroeId).subscribe(heroe => {
        if (heroe) {
          this.showDialogEdit(heroe);
        }
      })
    )
  }

  private showDialogEdit(heroe: Heroes): void {
    const dialogRef = this.dialog.open(HeroesDetailComponent, { data: Object.assign(PARAMS_MODAL.EDITAR_HEROE, { heroe }) });
    dialogRef.afterClosed().subscribe((formHeroe: Heroes) => {
      if (formHeroe) {
        this.updateHeroe(formHeroe, heroe.id)
      }
    });
  }

  private updateHeroe(heroe: Heroes, heroeId: number): void {
    this.suscriptions.push(
      this.heroesService.updateHeroes(heroe, heroeId).subscribe(() => {
        this.getHeroesAll();
      })
    )
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(suscriptions => {
      suscriptions.unsubscribe();
    })
  }

}
