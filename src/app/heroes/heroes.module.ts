import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { HeroesFormComponent } from "../components/heroes-form/heroes-form.component";
import { HeroesComponent } from "./heroes.component";

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'heroes-detail',
    component: HeroesFormComponent
  }
]
@NgModule({
  declarations: [
    HeroesComponent,
    HeroesFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,

  ]
})

export class HeroesModule { }