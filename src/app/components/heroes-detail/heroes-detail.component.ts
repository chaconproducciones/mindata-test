import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Heroes } from '@mindata/models';
import { HeroesService } from '@mindata/services';
import { PARAMS_MODAL } from '@mindata/constants';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html'
})
export class HeroesDetailComponent implements OnInit, OnDestroy {

  public title: string = '';
  public subtitle: string = '';
  public isEdit: boolean = false;
  public suscriptions: Array<Subscription> = [];

  public heroe: Heroes;
  public labels = PARAMS_MODAL;

  public heroeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    origin: new FormControl('', [Validators.required]),
  });

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.loadHero();
  }

  public loadHero(): void {
    this.suscriptions.push(
      this.heroesService.heroeForEdit.subscribe(heroe => {
        if (heroe) {
          this.heroe = heroe;
          this.setDataForm(heroe);
        }
      })
    )
  }

  public setDataForm(heroe: Heroes): void {
    this.heroeForm.setValue({ name: heroe.name, description: heroe.description, origin: heroe.origin })
  }

  get labelsTitles() {
    return this.heroe ? PARAMS_MODAL.EDITAR_HEROE : PARAMS_MODAL.NEW_HEROE
  }

  public goToHome(): void {
    this.router.navigate(['heroes'])
  }

  public saveHeroe(heroe: Heroes): void {
    this.heroe ? this.updateHeroe(heroe) : this.saveNewHeroe(heroe);
  }

  public saveNewHeroe(heroe: Heroes): void {
    const randomId = new Date().getTime();
    heroe.id = randomId;
    this.suscriptions.push(
      this.heroesService.saveHeroes(heroe).subscribe(() => {
        this.router.navigate(['heroes']);
      }, error => {
        console.log("Error al guardar", error)
      })
    )
  }

  public updateHeroe(heroe: Heroes): void {
    this.suscriptions.push(
      this.heroesService.updateHeroes(heroe, this.heroe.id).subscribe(() => {
        this.router.navigate(['heroes']);
      }, error => {
        console.log("Error al actualizar", error)
      })
    )
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(suscriptions => {
      suscriptions.unsubscribe();
    })
  }

}
