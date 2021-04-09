import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatPaginatorIntl, MatPaginatorModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { CustomPaginatorLabels } from './heroes-list/custom-paginator';
import { SearchComponent } from './search/search.component';
import { UpperCaseDirective } from '@mindata/directives';

const COMPONENTS = [
  HeroesListComponent,
  HeroesDetailComponent,
  SearchComponent,
]

const DIRECTIVES = [
  UpperCaseDirective
]

const MODULES_MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    COMPONENTS,
    DIRECTIVES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MODULES_MATERIAL

  ],
  entryComponents: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS,
    MODULES_MATERIAL
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginatorLabels() }
  ]
})
export class ComponentsModule { }
