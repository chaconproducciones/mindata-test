import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Heroes } from '@mindata/models';
import { HeroesService } from '@mindata/services';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html'
})
export class HeroesFormComponent implements OnInit, OnDestroy {

  private suscriptions: Array<Subscription> = [];
  public getHeroeSend: Heroes;
  @Input() public operacion: string = '';

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroe();
  }

  private getHeroe(): void {
    this.suscriptions.push(
      this.heroesService.heroeForEdit.subscribe(heroe => {
        this.getHeroeSend = heroe;
      })
    )
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(suscriptions => {
      suscriptions.unsubscribe();
    })

  }

}
