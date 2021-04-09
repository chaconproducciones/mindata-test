import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatProgressSpinnerModule, MatToolbarModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogsFormatsComponent } from './components/dialogs-formats/dialogs-formats.component';
import { HttpErrorInterceptor, LoaderInterceptor } from '@mindata/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoaderSpinnerComponent,
    HeaderComponent,
    DialogsFormatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorInterceptor, 
      multi: true 
    }
  ],
  entryComponents: [DialogsFormatsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
